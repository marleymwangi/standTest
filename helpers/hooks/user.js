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
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../../firebase";
import localforage from "localforage";
import { useAuth } from "../../context/authContext";
//custom
import { isEmpty } from "../utility";

const useUserFetch = () => {
  const { user: session } = useAuth();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [drops, setDrops] = useState([]);

  const [userPending, setUserPending] = useState(true);
  const [usersPending, setUsersPending] = useState(false);
  const [dropsPending, setDropsPending] = useState(false);

  const [userError, setUserError] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [dropsError, setDropsError] = useState(null);

  useEffect(() => {
    try {
      if (!isEmpty(session) && session?.id?.length > 0) {
        let docRef = doc(db, "takaEmployees", session.id);

        return onSnapshot(
          docRef,
          (doc) => {
            if (!doc.exists()) {
              console.log(tmp);
              setUserDataDb(session).then((res) => console.log("User Created"));
            } else {
              setUserDataDb(session).then((res) => console.log("User Updated"));

              let u = { id: doc.id, ...doc.data() };
              if (u !== session) {
                setUser(u);
                setUserPending(false);
              }
            }
          },
          (error) => {
            console.info("User Hook: getUserDataFromDb useEffect: ", error);
          }
        );
      }
    } catch (error) {
      console.info(
        "User Hook: getUserDataFromDb useEffect: ",
        JSON.stringify(error)
      );
      setUserError(error);
      setUserPending(false);
    }
  }, [session, session?.id]);

  useEffect(() => {
    try {
      let queryRef = query(collection(db, "users"), orderBy("created", "desc"));
      localforage.getItem("users", function (err, value) {
        // if err is non-null, we got an error. otherwise, value is the value
        if (!err && value) {
          setUsers(JSON.parse(value));
        }
      });

      return onSnapshot(
        queryRef,
        (snapshot) => {
          let tmp = [];
          snapshot.forEach((doc) => {
            let per = { id: doc.id, ...doc.data() };
            tmp.push(per);
          });

          setUsers(tmp);
          localforage.setItem("users", JSON.stringify(tmp), function (err) {
            // if err is non-null, we got an error
          });
          setUsersError(false);
        },
        (error) => {
          console.info("User Hook: getDataFromDb useEffect: ", error);
        }
      );
    } catch (error) {
      console.info("User Hook: getDataFromDb useEffect: ", error);
      setUsersError(error);
      setUsersPending(false);
    }
  }, []);

  useEffect(() => {
    try {
      if (!isEmpty(session) && session?.id?.length > 0) {
        let queryRef = query(
          collection(db, "drops"),
          orderBy("timestamp", "desc")
        );
        localforage.getItem("drops", function (err, value) {
          // if err is non-null, we got an error. otherwise, value is the value
          if (!err && value) {
            setDrops(JSON.parse(value));
          }
        });

        return onSnapshot(
          queryRef,
          (snapshot) => {
            let tmp = [];
            snapshot.forEach((doc) => {
              let timestm = doc.data()?.timestamp.toDate();
              let d = {
                id: doc.id,
                ...doc.data(),
                timestamp: timestm,
              };

              tmp.push(d);
            });

            setDrops(tmp);
            localforage.setItem("drops", JSON.stringify(tmp), function (err) {
              // if err is non-null, we got an error
            });
            setDropsPending(false);
          },
          (error) => {
            console.info("User Hook: getDrops useEffect: ", error);
          }
        );
      }
    } catch (error) {
      console.log("User Hook: getDrops useEffect: ", error);
      setDropsError(error);
      setDropsPending(false);
    }
  }, [session, session?.id]);

  function setUserDataDb(updateObj) {
    return new Promise((resolve, reject) => {
      try {
        if (session?.id?.length < 1) {
          reject({ message: "Missing user Id" });
        } else {
          let docRef = doc(db, "takaEmployees", session?.id);

          setDoc(docRef, updateObj, { merge: true }).then((res) =>
            resolve("done")
          );
        }
      } catch (error) {
        console.log("User Hook: getDrops useEffect: ", error);
        console.info("User Hook: setUserDataDb:");
        console.error(error);
        reject(error);
      }
    });
  }

  function addUserFeedback(updateObj) {
    return new Promise((resolve, reject) => {
      try {
        if (session?.id?.length < 1) {
          reject({ message: "Missing user Id" });
        } else {
          let colRef = collection(db, "feedback");
          updateObj.source = "stand";
          updateObj.timestamp = serverTimestamp();

          addDoc(colRef, updateObj).then((res) => resolve("done"));
        }
      } catch (error) {
        console.log("User Hook: getDrops useEffect: ", error);
        console.info("User Hook: setUserDataDb:");
        console.error(error);
        reject(error);
      }
    });
  }

  function updateNotId(obj) {
    if (isEmpty(obj)) {
      reject({ message: "No data to update" });
    } else if (isEmpty(session?.id)) {
      return;
    } else if (user?.notId === obj.notId) {
      return;
    } else {
      return setUserDataDb(obj);
    }
  }

  return {
    user,
    users,
    drops,

    userPending,
    usersPending,
    dropsPending,

    userError,
    usersError,
    dropsError,
    updateNotId,
    addUserFeedback,
  };
};

export default useUserFetch;
