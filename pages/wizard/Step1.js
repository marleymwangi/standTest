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
    if (verifyNumber(event.target.value)) {
      if (event.target.value.length <= 9) {
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
      <p className="text-sm text-teal-700 font-medium text-center mb-3">
        Customer Phone Number
      </p>
      <label className="input-group input-group-lg">
        <span className="text-white bg-primary font-medium">+254</span>
        <input
          type="text"
          onChange={change}
          placeholder="72XXXXXXX"
          value={phoneNumber?.data}
          className="input input-lg input-primary input-bordered text-primary font-semibold w-full"
        />
      </label>
      {phoneNumber.state === "error" && (
        <p className="text-error text-xs italic text-center mt-1">
          Please enter valid Input. {phoneNumber?.mess}
        </p>
      )}
      <div className="grid place-content-center mt-10 text-center text-teal-700 bg-white rounded-box border min-h-[30vh]">
        <p className="font-medium text-lg text-gray-400">
          {!pending && !person?.name && "Enter a valid user number"}
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
            <div className="relative rounded-box h-[8vh] w-[8vh] overflow-hidden mt-2 mx-auto">
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
        {!pending && !person?.name && error && (
          <p className="text-3xl font-semibold">{error}</p>
        )}
      </div>
      <div className="mt-10 grid">
        <button
          onClick={handleComplete}
          className={classNames(
            "btn btn-primary border-0 btn-lg rounded-xl w-full md:max-w-md mx-auto shadow-lg"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
}
