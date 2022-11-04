import { useEffect, useState } from "react";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
import { classNames, isEmpty, verifyNumber } from "../../helpers/utility";

export default function Step1({ payload, setPayload, step, setStep }) {
  const [phoneNumber, setPhoneNumber] = useState({ data: "", state: null });
  const { person, pending, error } = usePersonFetch(`+254${phoneNumber?.data}`);

  const change = (event) => {
    if (verifyNumber(event.target.value)) {
      setPhoneNumber({
        data: event.target.value,
        state: "success",
      });
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

  const handleComplete = () => {
    if (!pending && !error && !isEmpty(person)) {
      setPayload({ ...payload, user: person });
      setStep("containers");
    }
  };

  return (
    <div className="mx-auto pt-[5vh] w-full">
      <p className="text-lg text-teal-700 font-medium text-center">
        Customer Phone Number
      </p>
      <label className="input-group input-group-lg">
        <span className="text-white bg-primary font-bold">+254</span>
        <input
          type="text"
          onChange={change}
          placeholder="72XXXXXXX"
          value={phoneNumber?.data}
          className="input input-lg input-primary input-bordered font-bold w-full"
        />
      </label>
      {phoneNumber.state === "error" && (
        <p className="text-error text-xs italic text-center mt-1">
          Please enter valid Input. {phoneNumber?.mess}
        </p>
      )}
      <div className="grid mt-10 text-center text-emerald-700">
        <p className="text-xl font-medium">
          {pending ? "Searching" : !person?.name && "Enter Number"}
        </p>
        <p className="text-3xl font-semibold">
          {!pending && person?.name && "User Enrolled"}
        </p>
        <p className="text-3xl font-semibold">{!pending && person?.name}</p>
        <p className="text-3xl font-semibold">{!pending && error}</p>
      </div>
      <div className="mt-10">
        <button
          onClick={handleComplete}
          className={classNames(
            "btn btn-primary border-0 btn-lg rounded-xl w-full md:max-w-md mx-auto "
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
}
