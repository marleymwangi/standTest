import { useState, useEffect } from "react";
//custom
import NumberPicker from "../../components/elements/NumberPicker";
import {
  brands,
  wasteTypes,
  classNames,
  productsDict,
  verifyNumber,
} from "../../helpers/utility";

export default function Containers({ data, index, updateFunc }) {
  const [dataObject, setDataObject] = useState(reverseObjBuild(data[index]) || {});
  const [inputStates, setinputStates] = useState({});

  const [containers, setContainers] = useState(0);

  const change = (event, type = "str") => {
    switch (type) {
      case "sel":
        setDataObject((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        });

        if (event.target.value?.length > 0) {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: "success",
            };
          });
        } else {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: null,
            };
          });
        }
        break;
      case "str":
        setDataObject((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        });

        if (event.target.value?.length > 0) {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: "success",
            };
          });
        } else {
          setinputStates((prevState) => {
            return {
              ...prevState,
              [event.target.name]: null,
            };
          });
        }
        break;
      case "num":
        if (verifyNumber(event.target.value) || event.target.value === "") {
          setDataObject((prevState) => {
            return {
              ...prevState,
              [event.target.name]: event.target.value,
            };
          });

          if (event.target.value?.length > 0) {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: "success",
              };
            });
          } else {
            setinputStates((prevState) => {
              return {
                ...prevState,
                [event.target.name]: null,
              };
            });
          }
        } else {
          setinputStates({
            ...inputStates,
            [event.target.name]: {
              error: true,
              mess: "Please enter a valid input",
            },
          });
        }
      default:
        break;
    }
  };

  function reverseObjBuild(obj) {
    let tmp = { ...obj };
    if (obj.ob) {
      tmp.otherBrand = obj.brand;
      tmp.brand = "other";
      delete tmp.ob;
    }
    if (obj.op) {
      tmp.otherProd = obj.product;
      tmp.product = "other";
      delete tmp.op;
    }
    return tmp;
  }

  useEffect(() => {
    let tmp = reverseObjBuild(data[index]);
    setDataObject(tmp);
  }, []);

  useEffect(() => {
    let cpy = JSON.parse(JSON.stringify(data));
    let tmp = cpy[index];
    if (dataObject?.type?.length > 0) {
      tmp.type = dataObject.type;
    }
    if (dataObject?.size?.length > 0) {
      tmp.size = dataObject.size;
    }
    if (dataObject?.units?.length > 0) {
      tmp.units = dataObject.units;
    }
    if (dataObject.brand === "other") {
      tmp.brand = dataObject?.otherBrand?.trim();
      tmp.ob = true;
    } else if (dataObject.brand?.length > 0) {
      tmp.brand = dataObject?.brand;
    }
    if (dataObject?.product === "other") {
      tmp.product = dataObject?.otherProd?.trim();
      tmp.op = true;
    } else if (dataObject?.product?.length > 0) {
      tmp.product = dataObject?.product;
    }
    updateFunc(cpy);
  }, [dataObject]);

  useEffect(() => {
    let cpy = JSON.parse(JSON.stringify(data));
    let tmp = cpy[index];
    tmp.containers = containers;
    updateFunc(cpy);
  }, [containers]);

  return (
    <div className="mx-auto w-full max-w-sm grid gap-3">
      <p className="text-primary text-xs text-center">Select Brand</p>
      <select
        name="type"
        defaultValue={"default"}
        onChange={(e) => change(e, "sel")}
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
      </select>
      <div className="flex gap-3 items-center">
        <div className="relative form-control w-1/2">
          <input
            name="size"
            type="number"
            placeholder=" "
            value={dataObject?.size || ""}
            onChange={(e) => change(e, "num")}
            className={classNames(
              "block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer font-medium",
              "border-emerald-500 focus:border-emerald-500"
            )}
          />
          <label
            className={classNames(
              "absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3.5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3",
              "text-emerald-600 peer-focus:text-emerald-600"
            )}
          >
            Size
          </label>
        </div>
        <select
          name="units"
          defaultValue={"default"}
          onChange={(e) => change(e, "sel")}
          className={classNames(
            "select w-1/2",
            false ? "text-error select-error" : "select-primary"
          )}
        >
          <option disabled value={"default"}>
            Units
          </option>
          <option value="ml">Millilitres</option>
          <option value="l">Litres</option>
          <option value="g">Grams</option>
          <option value="kg">Kilograms</option>
        </select>
      </div>
      <select
        name="brand"
        defaultValue={"default"}
        value={dataObject?.brand || "default"}
        onChange={(e) => change(e, "sel")}
        className={classNames(
          "select w-full",
          false ? "text-error select-error" : "select-primary"
        )}
      >
        <option disabled value={"default"}>
          Select Company
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
        dataObject?.brand === "other" && (
          <div className="relative form-control w-full">
            <input
              type="text"
              placeholder=" "
              name="otherBrand"
              value={dataObject?.otherBrand || ""}
              onChange={(e) => change(e, "str")}
              className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer text-emerald-900 border-emerald-500 focus:border-emerald-500 font-medium"
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                "text-emerald-700 peer-focus:text-emerald-600"
              )}
            >
              Brand
            </label>
            {inputStates?.otherBrand?.error && (
              <p className="text-error text-xs italic text-center mt-1">
                {inputStates?.otherBrand?.mess}
              </p>
            )}
          </div>
        )
      }
      <select
        name="product"
        defaultValue={"default"}
        value={dataObject?.product || "default"}
        onChange={(e) => change(e, "sel")}
        className={classNames(
          "select w-full",
          false ? "text-error select-error" : "select-primary"
        )}
      >
        <option disabled value={"default"}>
          Select Product
        </option>
        {productsDict[dataObject?.brand]?.length > 0 &&
          productsDict[dataObject?.brand].map((p, i) => (
            <option key={i} value={p.value}>
              {p.text}
            </option>
          ))}
        <option value="other">Other</option>
      </select>
      {
        //other product
        dataObject?.product === "other" && (
          <div className="relative form-control w-full">
            <input
              type="text"
              placeholder=" "
              name="otherProd"
              onChange={(e) => change(e, "str")}
              className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm bg-white border focus:border-2 appearance-none focus:outline-none focus:ring-0 peer text-emerald-900 border-emerald-500 focus:border-emerald-500 font-medium"
            />
            <label
              className={classNames(
                "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                "text-emerald-700 peer-focus:text-emerald-600"
              )}
            >
              Product
            </label>
            {inputStates?.otherProd?.error && (
              <p className="text-error text-xs italic text-center mt-1">
                {inputStates?.otherProd?.mess}
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
