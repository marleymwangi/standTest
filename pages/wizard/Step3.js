import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import fetch from "node-fetch";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import { classNames, isEmpty } from "../../helpers/utility";
//dynamic
const FaPlus = dynamic(async () => (await import("react-icons/fa")).FaPlus);

export default function Step3({ payload, setPayload, setStep }) {
  const { createDropOffTransaction } = usePersonFetch(payload?.user?.id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEmpty(payload?.user)) {
      console.log("Empty");
      setStep("number");
    }
  }, [payload]);

  const companyName = (name) => {
    switch (name) {
      case "pernodricard":
        return "Pernod";
      case "cocacola":
        return "Coca Cola";
      case "bidco":
        return "Bidco";
      case "unilever":
        return "Unilever";
      case "procterngamble":
        return "Procter & Gamble";
      case "brookside":
        return "Brookside";
      case "eabl":
        return "EABL";
      case "dairyland":
        return "Dairyland";
      case "kenyaoriginals":
        return "Kenya Originals";
      case "other":
        return "Other";
    }
  };

  const handleComplete = () => {
    if (!isEmpty(payload?.user) && payload.containers.length > 0) {
      let u = payload.user;
      delete u.points;

      createDropOffTransaction({
        user: u,
        timestamp: new Date(),
        containers: payload.containers,
      })
        .then((res) => {
          console.log(res);
          setPayload({});
          setLoading(false);
          toast.success(
            <div>
              <h5 className="font-medium text-gray-900">Success</h5>
              <h6>Drop off saved successfully.</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            <div>
              <h5 className="font-medium text-gray-900">Error</h5>
              <h6>Error saving user drop off</h6>
            </div>,
            {
              closeOnClick: true,
            }
          );
          setLoading(false);
        });
    }
  };

  return (
    <div className="mx-auto pb-10 w-full">
      <p className="text-lg text-teal-700 font-medium text-center">
        Confirm Customer Dropoff
      </p>
      {payload?.containers?.length > 0 &&
        payload?.containers.map((c, i) => (
          <div
            className="grid grid-cols-2 bg-white  mt-5 text-xl font-bold w-full"
            key={i}
          >
            <span className="border border-dashed p-4 text-center">
              {companyName(c?.brand)}
            </span>
            <span className="border border-dashed p-4 text-center">
              {c?.containers}
            </span>
          </div>
        ))}
      <div className="mt-10 grid">
        <button
          onClick={handleComplete}
          className={classNames(
            loading && "loading",
            "btn btn-primary border-0 btn-lg rounded-xl w-full md:max-w-md mx-auto shadow-lg"
          )}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
