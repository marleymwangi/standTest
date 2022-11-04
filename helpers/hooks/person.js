import { useEffect, useState } from "react";
import { doc,setDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../../firebase";
//custom

const usePersonFetch = (phoneNumber) => {
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

  function setUserPointsDb(points) {
    return new Promise((resolve, reject) => {
      try {
        if (phoneNumber?.length !== 13) {
          reject({ message: "Missing phone number" });
        } else {
          let docRef = doc(db, "users", phoneNumber);

          setDoc(docRef, { points }, { merge: true }).then((res) =>
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

  return {
    person,
    pending,
    error,
    setUserPointsDb
  };
};

export default usePersonFetch;
