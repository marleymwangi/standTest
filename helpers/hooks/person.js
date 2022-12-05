import { useSession } from "next-auth/react";
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
//custom
import { db } from "../../firebase";
import { isEmpty } from "../utility";

const usePersonFetch = (phoneNumber) => {
  const { data: session } = useSession();
  const [person, setPerson] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [pending, setPending] = useState(false);
  const [transPending, setTransPending] = useState(false);
  const [error, setError] = useState(null);
  const [transError, setTransError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [phoneNumber]);

  useEffect(() => {
    try {
      if (phoneNumber?.length > 0 && phoneNumber?.length === 13) {
        setPending(true);
        let docRef = doc(db, "users", phoneNumber);

        return onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            let per = { id: doc.id, ...doc.data() };
            setPerson(per);
            setPending(false);
          } else {
            console.warn(`No user found with ${phoneNumber}`);
            setPending(false);
            setError(`No user found with ${phoneNumber}`);
          }
        });
      } else {
        setPerson({});
        setPending(false);
      }
    } catch (error) {
      console.warn("Person Hook: getDataFromDb useEffect: ", error);
      setError(error);
      setPending(false);
    }
  }, [phoneNumber]);

  useEffect(() => {
    try {
      if (phoneNumber?.length > 0 && phoneNumber?.length === 13) {
        setTransPending(true);
        let queryRef = query(
          collection(db, "transactions"),
          where("user", "==", phoneNumber)
        );

        return onSnapshot(
          queryRef,
          (snapshot) => {
            let tmp = [];
            snapshot.forEach((doc) => {
              //let timestm = doc.data().timestamp.toDate();
              let tr = {
                id: doc.id,
                ...doc.data(),
                //timestamp: timestm,
              };

              tmp.push(tr);
            });

            setTransactions(tmp);
            setTransPending(false);
          },
          (error) => {
            console.info("User Hook: getUserNotifications useEffect: ", error);
          }
        );
      }
    } catch (error) {
      console.info("User Hook: getUserNotifications: ", error);
      setTransError(error);
      setTransPending(false);
    }
  }, [phoneNumber]);

  function createDropOffTransaction(obj) {
    return new Promise((resolve, reject) => {
      try {
        if (isEmpty(obj)) {
          reject("Nothing to update");
        } else if (phoneNumber?.length !== 13) {
          reject("Missing phone number");
        } else if (session?.user?.id?.length < 1) {
          reject("Please sign in");
        } else {
          let colRef = collection(db, "drops");
          obj.submitted = session.user.id;
          obj.status = "pending";

          addDoc(colRef, obj).then((res) => resolve("done"));
        }
      } catch (error) {
        console.warn("Person Hook: createDropOffTransaction:");
        console.error(error);
        reject(error);
      }
    });
  }

  return {
    person,
    transactions,

    pending,
    transPending,

    error,
    transError,
    createDropOffTransaction,
  };
};

export default usePersonFetch;
