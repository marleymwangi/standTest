import { useState, useEffect } from "react";
//custom
import NumberPicker from "../../components/elements/NumberPicker";
import { classNames, brands, productsDict } from "../../helpers/utility";

export default function Containers({ data, updateFunc }) {
  const [brand, setBrand] = useState("");
  const [prod, setProd] = useState("");
  const [containers, setContainers] = useState(0);

  const change = (event, setFunc) => {
    if (event.target.value !== "default") {
      setFunc(event.target.value);
    }
  };

  useEffect(() => {
    data.brand = brand;
    updateFunc();
  }, [brand]);

  useEffect(() => {
    data.product = prod;
    updateFunc();
  }, [prod]);

  useEffect(() => {
    data.containers = containers;
    updateFunc();
  }, [containers]);

  return (
    <div className="mx-auto w-full max-w-sm grid gap-3">
      <p className="text-primary text-xs text-center">Select Brand</p>
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
      <p className="text-primary text-xs text-center">No. of Container</p>
      <NumberPicker setFunc={setContainers} />
    </div>
  );
}
