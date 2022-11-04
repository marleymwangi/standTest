import { useState, useEffect } from "react";
//custom
import NumberPicker from "../../components/elements/NumberPicker";
import { classNames } from "../../helpers/utility";

export default function Containers({ data, state, message, updateFunc }) {
  const [brand, setBrand] = useState("");
  const [containers, setContainers] = useState("");

  const change = (event) => {
    if (event.target.value !== "default") {
      setBrand(event.target.value);
    }
  };

  useEffect(() => {
    data.name = brand;
    updateFunc();
  }, [brand]);

  useEffect(() => {
    data.containers = containers;
    updateFunc();
  }, [containers]);

  return (
    <>
      <div className="mx-auto w-full max-w-sm">
        <p className="text-lg text-primary text-center">Select Brand</p>
        <select
          onChange={change}
          defaultValue={"default"}
          className={classNames(
            "select select-lg w-full",
            false ? "text-error select-error" : "select-primary"
          )}
        >
          <option disabled value={"default"}>
            Select Brand
          </option>
          <option value={"pernod"}>Pernod</option>
          <option value={"cocacola"}>Coca Cola</option>
        </select>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <p className="text-lg text-primary text-center">No. of Container</p>
        <NumberPicker setFunc={setContainers} />
      </div>
      {data?.name?.length < 1 && (
        <p className="text-error text-sm italic text-center mt-1">
          Please enter valid Input. Select a Brand
        </p>
      )}
    </>
  );
}
