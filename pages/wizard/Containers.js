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
    { text: "Unilever", value: "unilever" },
    { text: "Procter & Gamble", value: "procterngamble" },
    { text: "Brookside", value: "brookside" },
    { text: "EABL", value: "eabl" },
    { text: "Dairyland", value: "dairyland" },
    { text: "Pernod Ricard", value: "pernodricard" },
    { text: "Kenya Originals", value: "kenyaoriginals" },
    { text: "Other", value: "other" }
  ];
  let productsDict = {
    cocacola: [
      { text: "Coca-Cola", value: "cocacola" },
      { text: "Sprite", value: "sprite" },
      { text: "Fanta", value: "fanta" },
      { text: "Stoney", value: "stoney" },
      { text: "Minute maid", value: "minutemaid" },
      { text: "Dasani", value: "dasani" },
      { text: "Schweppes", value: "schweppes" },
      { text: "Novida", value: "novida" }
    ],
    bidco: [
      { text: "Elianto", value: "elianto" },
      { text: "SoyaGold", value: "soyagold" },
      { text: "SunGold", value: "sungold" },
      { text: "Kimbo", value: "kimbo" },
      { text: "Olive Gold", value: "olivegold" },
      { text: "Golden Fry", value: "goldenfry" },
      { text: "Ufuta", value: "ufuta" },
      { text: "Bahari", value: "bahari" },
      { text: "Chipo", value: "chipo" },
      { text: "Mallo", value: "mallo" },
      { text: "Cowboy", value: "cowboy" },
      { text: "Chipsy", value: "chipsy" },
      { text: "Gold Band", value: "goldband" },
      { text: "Germonil", value: "germonil" },
      { text: "Nuru", value: "nuru" },
      { text: "Gental", value: "gental" },
      { text: "Msafi", value: "msafi" }
    ],
    unilever:[
      { text: "Dove", value: "dove" },
      { text: "Vaseline", value: "vaseline" },
      { text: "Sunsilk", value: "sunsilk" },
      { text: "Liquid I.V", value: "liquidiv" },
      { text: "Axe", value: "axe" },
      { text: "Lifebuoy", value: "lifebuoy" },
      { text: "Lux", value: "lux" },
      { text: "Rexona", value: "rexona" },
      { text: "Comfort", value: "comfort" },
      { text: "Omo", value: "omo" },
      { text: "Knorr", value: "knorr" },
      { text: "Hellmann’s", value: "hellmanns" },
      { text: "Horlicks", value: "horlicks" },
      { text: "Ben & Jerry’s", value: "bennjerrys" }
    ],
    procterngamble:[
      { text: "Ariel", value: "ariel" },
      { text: "Downy", value: "downy" },
      { text: "Tide", value: "tide" },
      { text: "bounty", value: "bounty" },
      { text: "Gilette", value: "gilette" },
      { text: "Old Spice", value: "oldspice" },
      { text: "Dawn", value: "dawn" },
      { text: "Febreze", value: "Febreze" },
      { text: "Mr Clean", value: "mrclean" },
      { text: "Oral B", value: "oralb" }
    ],
    brookside:[
      { text: "Lala", value: "lala" },
    ]
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
