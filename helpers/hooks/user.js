import { useEffect, useState } from "react";
import {
  doc,
  query,
  where,
  limit,
  addDoc,
  setDoc,
  orderBy,
  collection,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useSession } from "next-auth/react";
//custom
import { isEmpty } from "../utility";

const useUserFetch = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [drops, setDrops] = useState([]);

  const [userPending, setUserPending] = useState(true);
  const [dropsPending, setDropsPending] = useState(true);

  const [userError, setUserError] = useState(null);
  const [dropsError, setDropsError] = useState(null);

  useEffect(() => {
    if (!isEmpty(session)) {
      let user = parseSession(session);
      setUser(user);
      setUserPending(false);
    }
  }, [db, session]);

  useEffect(() => {
    try {
      if (!isEmpty(user)) {
        let docRef = doc(db, "takaEmployees", user.id);

        return onSnapshot(docRef, (doc) => {
          if (!doc.exists()) {
            let user = parseSession(session);
            delete user.id;
            setUserDataDb(user).then((res) => console.log("User Created"));
          } else {
            let user = parseSession(session);
            delete user.id;
            setUserDataDb(user).then((res) => console.log("User Updated"));

            let u = { id: doc.id, ...doc.data() };
            if (u !== user) {
              setUser(u);
              setUserPending(false);
            }
          }
        });
      }
    } catch (error) {
      console.warn(
        "User Hook: getUserDataFromDb useEffect: ",
        JSON.stringify(error)
      );
      setUserError(error);
      setUserPending(false);
    }
  }, [session, session?.user?.id]);

  useEffect(() => {
    try {
      if (!isEmpty(session) && session?.user?.id.length > 0) {
        let queryRef = query(
          collection(db, "drops"),
          orderBy("timestamp", "desc")
        );

        return onSnapshot(queryRef, (snapshot) => {
          let tmp = [];
          snapshot.forEach((doc) => {
            let timestm = doc.data().timestamp.toDate();
            let d = {
              id: doc.id,
              ...doc.data(),
              timestamp: timestm,
            };

            tmp.push(d);
          });

          setDrops(tmp);
          setDropsPending(false);
        });
      }
    } catch (error) {
      console.log("User Hook: getDrops: ", error);
      setDropsError(error);
      setDropsPending(false);
    }
  }, [session, session?.user?.id]);

  function parseSession(session) {
    if (!isEmpty(session)) {
      let obj = {};
      obj.id = session.user.id;
      obj.name = session.user.name;
      obj.email = session.user.email;
      obj.image = session.user.image;
      return obj;
    }
  }

  function setUserDataDb(updateObj) {
    return new Promise((resolve, reject) => {
      try {
        if (isEmpty(session?.user?.id)) {
          reject({ message: "Missing user Id" });
        } else {
          let docRef = doc(db, "takaEmployees", session.user.id);

          setDoc(docRef, updateObj, { merge: true }).then((res) =>
            resolve("done")
          );
        }
      } catch (error) {
        console.warn("User Hook: setUserDataDb:");
        console.error(error);
        reject(error);
      }
    });
  }

  function updateNotId(obj) {
    if (isEmpty(obj)) {
      reject({ message: "No data to update" });
    } else if (isEmpty(session?.user?.id)) {
      return;
    } else if (user?.notId === obj.notId) {
      return;
    } else {
      return setUserDataDb(obj);
    }
  }

  return {
    user,
    drops,

    userPending,
    dropsPending,

    userError,
    dropsError,
    updateNotId,
  };
};

export default useUserFetch;
