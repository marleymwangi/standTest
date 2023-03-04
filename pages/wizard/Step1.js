import { useEffect, useState } from "react";
import Image from "next/image";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import Loader from "../../components/elements/Loader";
import { classNames, isEmpty, verifyNumber } from "../../helpers/utility";

export default function Step1({ payload, setPayload, setStep }) {
  const [dataObject, setDataObject] = useState({});
  const [inputStates, setinputStates] = useState({});
  const { person, pending, error } = usePersonFetch(`+254${dataObject?.phoneNumber}`);

  const change = (event, type = "num") => {
    event.preventDefault();
    switch (type) {
      case "num":
        if (verifyNumber(event.target.value) || event.target.value === "") {
          setDataObject((prevState) => {
            return {
              ...prevState,
              [event.target.name]: event.target.value,
            };
          });

          if (event.target.value.length < 9) {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: null,
              };
            });
          } else if (event.target.value.length === 9) {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: "success",
              };
            });
          } else {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: {
                  error: true,
                  mess: "Phone number is too long",
                },
              };
            });
          }
        } else {
          setinputStates({
            ...inputStates,
            [event.target.name]: {
              error: true,
              mess: "Please enter a valid input",
            },
          });
        }
        break;
      default:
        break;
    }
  };  

  const handleComplete = (e) => {
    e.preventDefault();
    if (!pending && !error && !isEmpty(person)) {
      setPayload({ ...payload, user: person });
      setStep("containers");
    }
  };

  return (
    <div className="mx-auto pb-10 w-full">
      <p className="text-sm text-emerald-600 font-medium text-center mb-3">
        Customer Phone Number
      </p>
      <div className="flex gap-2 items-center">
        <button
          className={classNames(
            "btn btn-primary h-[4em] border-2",
            inputStates?.phoneNumber === "success" && "btn-success text-white",
            inputStates?.phoneNumber?.error && "btn-error text-white",
            inputStates?.phoneNumber !== "success" &&
              !inputStates?.phoneNumber?.error &&
              "btn-primary"
          )}
        >
          +254
        </button>
        <div className="relative form-control w-full">
          <input
            type="number"
            placeholder=" "
            name="phoneNumber"
            value={dataObject?.phoneNumber || ""}
            onChange={(e) => change(e, "num")}
            className={classNames(
              "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
              inputStates?.phoneNumber === "success" &&
                "text-success border-success",
              inputStates?.phoneNumber?.error && "text-error border-error",
              inputStates?.phoneNumber !== "success" &&
                !inputStates?.phoneNumber?.error &&
                "text-emerald-500 border-emerald-500 focus:border-emerald-500"
            )}
          />
          <label
            className={classNames(
              "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
              inputStates?.phoneNumber === "success" && "text-success",
              inputStates?.phoneNumber?.error && "text-error",
              inputStates?.phoneNumber !== "success" &&
                !inputStates?.phoneNumber?.error &&
                "text-emerald-700 peer-focus:text-emerald-600"
            )}
          >
            7XXXXXXXX
          </label>
        </div>
      </div>
      {inputStates?.phoneNumber?.error && (
        <p className="text-error text-xs italic text-center mt-1">
          {inputStates?.phoneNumber?.mess}
        </p>
      )}
      <div className="grid place-content-center mt-[1vh] text-center text-emerald-700 rounded-box min-h-[30vh]">
        <p className="font-medium text-lg text-gray-400">
          {!pending &&
            !person?.name &&
            !payload?.user &&
            "No user was found. Verify the number and try again"}
        </p>
        {pending && (
          <div>
            <Loader component />
            <p className="font-semibold text-gray-400">... Searching</p>
          </div>
        )}
        {!pending && person?.name && (
          <div>
            <p className="text-sm font-light text-primary">User Found</p>
            <div className="relative rounded-box h-[8vh] w-[8vh] overflow-hidden mt-2 mx-auto bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-500">
              <Image
                src="/images/user.webp"
                className="object-contain"
                priority="eager"
                layout="fill"
                alt=""
              />
            </div>
            <p className="text-lg font-medium text-gray-400 mt-2">User Name</p>
            <p className="text-2xl font-semibold text-primary">{person.name}</p>
          </div>
        )}
        {payload && payload?.user && (
          <div>
            <p className="text-sm font-light text-primary">User Found</p>
            <div className="relative rounded-box h-[8vh] w-[8vh] overflow-hidden mt-2 mx-auto bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500">
              <Image
                src="/images/user.webp"
                className="object-contain"
                priority="eager"
                layout="fill"
                alt=""
              />
            </div>
            <p className="text-lg font-medium text-gray-400 mt-2">User Name</p>
            <p className="text-2xl font-medium text-primary">
              {payload?.user.name}
            </p>
          </div>
        )}
        {!pending && !person?.name && error && (
          <p className="text-3xl font-semibold">{error}</p>
        )}
      </div>
      <div className="mt-6 grid">
        <button
          onClick={handleComplete}
          className={classNames(
            "btn btn-primary btn-lg rounded-xl w-full md:max-w-md mx-auto shadow-lg"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
}
