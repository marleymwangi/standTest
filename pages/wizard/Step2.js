import dynamic from "next/dynamic";
import localforage from "localforage";
import { useEffect, useState } from "react";
//hooks
import usePersonFetch from "../../helpers/hooks/person";
//custom
import Containers from "./Containers";
import { classNames, isEmpty } from "../../helpers/utility";
//dynamic
const FaPlus = dynamic(async () => (await import("react-icons/fa")).FaPlus);
const FaEraser = dynamic(async () => (await import("react-icons/fa")).FaEraser);

export default function Step2({ payload, setPayload, setStep }) {
  const { pending, error } = usePersonFetch(payload?.user?.id);
  const [brandContainers, setBrandContainers] = useState([]);

  useEffect(() => {
    if (isEmpty(payload?.user)) {
      setStep("number");
    }
  }, [payload]);

  useEffect(() => {
    console.log(brandContainers);
    //stores partial data in local storage to help with refreshes
    localforage.setItem(
      "containers-temp",
      JSON.stringify(brandContainers),
      function (err) {
        // if err is non-null, we got an error
      }
    );
  }, [brandContainers]);

  useEffect(() => {
    localforage.getItem("containers-temp", function (err, value) {
      // if err is non-null, we got an error. otherwise, value is the value
      if (value) {
        let obj = JSON.parse(value);
        setBrandContainers(obj);
      }
    });
  }, []);

  const addContainer = (e) => {
    e.preventDefault();
    let tmp = [
      ...brandContainers,
      {
        brand: "",
        containers: 0,
      },
    ];
    setBrandContainers([...tmp]);
  };

  const validate = () => {
    let res = brandContainers?.some((containers) => {
      if (containers.brand?.length < 1) {
        setBrandContainers({
          ...brandContainers,
          state: "error",
          mess: "Containers missing brand",
        });
        return false;
      } else if (containers.containers < 1) {
        setBrandContainers({
          ...brandContainers,
          state: "error",
          mess: "Containers cannot be 0",
        });
        return false;
      } else {
        setBrandContainers({
          ...brandContainers,
          state: "sucess",
          mess: "",
        });
        return true;
      }
    });
    return res;
  };

  const handleComplete = (e) => {
    e.preventDefault();
    let isValid = validate();
    if (!pending && !error && brandContainers?.length > 0 && isValid) {
      setPayload({ ...payload, containers: brandContainers });
      setStep("confirm");
    }
  };

  return (
    <div className="mx-auto pb-10 w-full">
      <div className="flex max-w-md justify-between items-center mx-auto">
        <p className="text-lg text-emerald-600 font-medium text-center">
          Customer Containers
        </p>
        <button
          onClick={eraseContainerHist}
          className="btn btn-circle btn-outline"
        >
          <FaEraser size="1.5em" />
        </button>
      </div>
      <div className="grid mt-6 gap-6">
        {brandContainers?.length > 0 &&
          brandContainers?.map((_, i) => (
            <div key={i}>
              <Containers
                index={i}
                data={brandContainers}
                updateFunc={setBrandContainers}
              />
            </div>
          ))}
      </div>
      {brandContainers?.state === "error" && (
        <p className="text-error text-sm italic text-center mt-1">
          {`Please enter valid Input. ${
            brandContainers.mess ? brandContainers.mess : ""
          }`}
        </p>
      )}
      <div className="grid place-content-center mt-10">
        <button
          onClick={addContainer}
          className="btn btn-primary btn-outline btn-circle btn-lg"
        >
          <FaPlus size="1.5em" />
        </button>
      </div>
      <div className="mt-10 grid">
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

  function eraseContainerHist() {
    localforage.removeItem("containers-temp", function (err) {
      // if err is non-null, we got an error
      setBrandContainers([]);
    });
  }
}
