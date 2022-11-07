import { collection, onSnapshot, addDoc, doc } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
//custom
import { db } from "../../firebase";
import { isEmpty } from "../utility";

const usePersonFetch = (phoneNumber) => {
  const { data: session } = useSession();
  const [person, setPerson] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

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
      }
    } catch (error) {
      console.warn("Person Hook: getDataFromDb useEffect: ", error);
      setError(error);
      setPending(false);
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
          reject("Please sign in")
        } else {
          let colRef = collection(db, "drops");
          obj.submitted = session.user.id;
          obj.status = "pending"

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
    pending,
    error,
    createDropOffTransaction,
  };
};

export default usePersonFetch;
