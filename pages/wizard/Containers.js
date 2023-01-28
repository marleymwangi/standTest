import { useState, useEffect } from "react";
//custom
import NumberPicker from "../../components/elements/NumberPicker";
import {
  brands,
  wasteTypes,
  classNames,
  productsDict,
} from "../../helpers/utility";

export default function Containers({ data, updateFunc }) {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [otherBrand, setOtherBrand] = useState("");
  const [prod, setProd] = useState("");
  const [otherProd, setOtherProd] = useState("");
  const [size, setSize] = useState("");
  const [units, setUnits] = useState("");
  const [containers, setContainers] = useState(0);

  const change = (event, setFunction, type = "str") => {
    switch (type) {
      case "sel":
        if (event.target.value !== "default") {
          setFunction(event.target.value);
        }
        break;
      case "str":
        setFunction(event.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    data.type = type;
    updateFunc();
  }, [type]);

  useEffect(() => {
    if (brand === "other") {
      data.brand = otherBrand.trim();
      data.ob = true;
    } else {
      data.brand = brand;
    }
    updateFunc();
  }, [brand, otherBrand]);

  useEffect(() => {
    console.log(prod);
    if (prod === "other") {
      data.product = otherProd.trim();
      data.op = true;
    } else {
      data.product = prod;
    }
    updateFunc();
  }, [prod, otherProd]);

  useEffect(() => {
    data.containers = containers;
    updateFunc();
  }, [containers]);

  return (
    <div className="mx-auto w-full max-w-sm grid gap-3">
      <p className="text-primary text-xs text-center">Select Brand</p>
      <select
        onChange={(e) => change(e, setType, "sel")}
        defaultValue={"default"}
        className={classNames(
          "select w-full",
          false ? "text-error select-error" : "select-primary"
        )}
      >
        <option disabled value={"default"}>
          Waste Type
        </option>
        {wasteTypes.map((type, i) => (
          <option key={i} value={type.value}>
            {type.text}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      <div className="flex gap-3 items-center">
        <div className="relative form-control w-1/2">
          <input
            placeholder=" "
            onChange={(e) => change(e, setSize, "str")}
            type="text"
            className={classNames(
              "block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
              "border-teal-500 focus:border-teal-500"
            )}
          />
          <label
            className={classNames(
              "absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3.5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3",
              "text-teal-600 peer-focus:text-teal-600"
            )}
          >
            Units
          </label>
        </div>
        <select
          onChange={(e) => change(e, setUnits, "sel")}
          defaultValue={"default"}
          className={classNames(
            "select w-1/2",
            false ? "text-error select-error" : "select-primary"
          )}
        >
          <option disabled value={"default"}>
            Size
          </option>
          <option value="ml">Millilitres</option>
          <option value="l">Litres</option>
          <option value="g">Grams</option>
          <option value="kg">Kilograms</option>
        </select>
      </div>
      <select
        onChange={(e) => change(e, setBrand, "sel")}
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
        <option value="other">Other</option>
      </select>
      {
        //other brand
        brand === "other" && (
          <div className="relative form-control w-full">
            <input
              type="text"
              placeholder=" "
              onChange={(e) => change(e, setOtherBrand)}
              className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer text-teal-900 border-teal-500 focus:border-teal-500 font-medium"
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                "text-teal-700 peer-focus:text-teal-600"
              )}
            >
              Brand
            </label>
            {otherBrand.trim() === "" && (
              <p className="text-error text-xs italic text-center mt-1">
                Brand is required
              </p>
            )}
          </div>
        )
      }
      <select
        onChange={(e) => change(e, setProd, "sel")}
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
        <option value="other">Other</option>
      </select>
      {
        //other product
        prod === "other" && (
          <div className="relative form-control w-full">
            <input
              type="text"
              placeholder=" "
              onChange={(e) => change(e, setOtherProd)}
              className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer text-teal-900 border-teal-500 focus:border-teal-500 font-medium"
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                "text-teal-700 peer-focus:text-teal-600"
              )}
            >
              Product
            </label>
            {otherProd.trim() === "" && (
              <p className="text-error text-xs italic text-center mt-1">
                Product is required
              </p>
            )}
          </div>
        )
      }

      <p className="text-primary text-xs text-center">No. of Container</p>
      <NumberPicker setFunc={setContainers} />
    </div>
  );
}
