import { useEffect, useState } from "react";
import Image from "next/image";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import Loader from "../../components/elements/Loader";
import { classNames, isEmpty, verifyNumber } from "../../helpers/utility";

export default function Step1({ payload, setPayload, setStep }) {
  const [phoneNumber, setPhoneNumber] = useState({ data: "", state: null });
  const { person, pending, error } = usePersonFetch(`+254${phoneNumber?.data}`);

  const change = (event) => {
    event.preventDefault();
    if (verifyNumber(event.target.value)) {
      if (event.target.value.length < 9) {
        setPhoneNumber({
          data: event.target.value,
          state: null,
        });
      } else if (event.target.value.length === 9) {
        setPhoneNumber({
          data: event.target.value,
          state: "success",
        });
      } else {
        setPhoneNumber({
          data: event.target.value,
          state: "error",
          mess: "Input is too long",
        });
      }
    } else {
      setPhoneNumber({
        data: event.target.value,
        state: "error",
        mess: "Input must be a number",
      });
    }
  };

  useEffect(() => {
    //console.log(person);
  }, [person]);

  const handleComplete = (e) => {
    e.preventDefault();
    if (!pending && !error && !isEmpty(person)) {
      setPayload({ ...payload, user: person });
      setStep("containers");
    }
  };

  return (
    <div className="mx-auto pb-10 w-full">
      <p className="text-sm text-teal-600 font-medium text-center mb-3">
        Customer Phone Number
      </p>
      <div className="flex gap-1 items-center">
        <button
          className={classNames(
            "btn btn-primary h-[4em] border-2",
            phoneNumber?.state === "success" && "btn-success text-white",
            phoneNumber?.state === "error" && "btn-error text-white",
            phoneNumber?.state !== "success" &&
              phoneNumber?.state !== "error" &&
              "btn-primary"
          )}
        >
          +254
        </button>
        <div className="relative form-control w-full">
          <input
            placeholder=" "
            onChange={change}
            type="number"
            className={classNames(
              "block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
              phoneNumber?.state === "success" && "text-success border-success",
              phoneNumber?.state === "error" && "text-error border-error",
              phoneNumber?.state !== "success" &&
                phoneNumber?.state !== "error" &&
                "text-teal-500 border-teal-500 focus:border-teal-500"
            )}
          />
          <label
            className={classNames(
              "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
              phoneNumber?.state === "success" && "text-success",
              phoneNumber?.state === "error" && "text-error",
              phoneNumber?.state !== "success" &&
                phoneNumber?.state !== "error" &&
                "text-teal-700 peer-focus:text-teal-600"
            )}
          >
            7XXXXXXXX
          </label>
        </div>
      </div>
      {phoneNumber.state === "error" && (
        <p className="text-error text-xs italic text-center mt-1">
          Please enter valid Input. {phoneNumber?.mess}
        </p>
      )}
      <div className="grid place-content-center mt-[1vh] text-center text-teal-700 rounded-box min-h-[30vh]">
        <p className="font-medium text-lg text-gray-400">
          {!pending && !person?.name && !payload?.user && "No user was found. Verify the number and try again"}
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
            <div className="relative rounded-box h-[8vh] w-[8vh] overflow-hidden mt-2 mx-auto bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500">
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
            <div className="relative rounded-box h-[8vh] w-[8vh] overflow-hidden mt-2 mx-auto bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500">
              <Image
                src="/images/user.webp"
                className="object-contain"
                priority="eager"
                layout="fill"
                alt=""
              />
            </div>
            <p className="text-lg font-medium text-gray-400 mt-2">User Name</p>
            <p className="text-2xl font-medium text-primary">{payload?.user.name}</p>
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
