import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import Containers from "./Containers";
import { classNames } from "../../helpers/utility";
//dynamic
const FaPlus = dynamic(async () => (await import("react-icons/fa")).FaPlus);

export default function Step2({ payload, setPayload, step, setStep }) {
  const { person, pending, error } = usePersonFetch(payload?.user?.id);
  const [brandContainers, setBrandContainers] = useState({
    data: [],
    state: null,
  });
  const [update, setUpdate] = useState(true);

  const toggle = () => {
    setUpdate(!update);
  };

  const addContainer = () => {
    let tmp = [
      ...brandContainers.data,
      {
        name: "",
        containers: "",
      },
    ];
    setBrandContainers({
      data: tmp,
      state: "error",
      mess: "Select Brand",
    });
  };

  const handleComplete = () => {
    if (!pending && !error && brandContainers?.data?.length > 0) {
      setPayload({ ...payload, containers: brandContainers.data });
      setStep("confirm");
    }
  };

  return (
    <div className="mx-auto pt-[5vh] w-full">
      <p className="text-lg text-teal-700 font-medium text-center">
        Customer Phone Number
      </p>
      {brandContainers?.data?.length > 0 &&
        brandContainers?.data.map((bC, i) => (
          <div key={i}>
            <Containers
              data={bC}
              state={brandContainers?.state}
              message={brandContainers.mess}
              updateFunc={toggle}
            />
          </div>
        ))}
      <div className="grid place-content-center mt-10">
        <button
          onClick={addContainer}
          className="btn btn-primary btn-outline btn-circle btn-lg"
        >
          <FaPlus size="1.5em" />
        </button>
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
