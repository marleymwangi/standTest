import { useState, useEffect } from "react";
//custom
import NumberPicker from "../../components/elements/NumberPicker";
import { classNames } from "../../helpers/utility";

export default function Containers({ data, state, message, updateFunc }) {
  const [scan, setScan] = useState("No result");
  const [brand, setBrand] = useState("");
  const [prod, setProd] = useState("");
  const [containers, setContainers] = useState("");

  const change = (event, setFunc) => {
    if (event.target.value !== "default") {
      setFunc(event.target.value);
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

  let brands = [
    { text: "Coca Cola", value: "cocacola" },
    { text: "Bidco", value: "bidco" },
  ];
  let productsDict = {
    cocacola: [{ text: "Fanta", value: "fanta" }],
    bidco: [{ text: "Elianto", value: "elianto" }],
  };

  return (
    <div className="mx-auto w-full max-w-sm grid gap-3">
      <p className="text-primary text-center">Select Brand</p>
      <select
        onChange={(e) => change(e, setBrand)}
        defaultValue={"default"}
        className={classNames(
          "select w-full",
          false ? "text-error select-error" : "select-primary"
        )}
      >
        <option disabled value={"default"}>
          Select Brand
        </option>
        {brands.map((brand, i) => (
          <option key={i} value={brand.value}>
            {brand.text}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => change(e, setProd)}
        defaultValue={"default"}
        className={classNames(
          "select w-full",
          false ? "text-error select-error" : "select-primary"
        )}
      >
        <option disabled value={"default"}>
          Select Product
        </option>
        {productsDict[brand]?.length > 0 &&
          productsDict[brand].map((p, i) => (
            <option key={i} value={p.value}>
              {p.text}
            </option>
          ))}
      </select>
      <p className="text-primary text-center">No. of Container</p>
      <NumberPicker setFunc={setContainers} />
      {data?.name?.length < 1 && (
        <p className="text-error text-sm italic text-center mt-1">
          Please enter valid Input. Select a Brand
        </p>
      )}
    </div>
  );
}
