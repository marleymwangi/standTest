import { useEffect, useState } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";
//custom
import BarcodeScannerComponent from "./BarcodeScanner";

import React from "react";

export default function Scanner() {
  const [libLoaded, setLibLoaded] = useState(null);
  const [resultValue, setResultValue] = useState(null);
  const [bShowScanner, setBShowScanner] = useState(null);
  const [error, setError] = useState("");
  const [scanned, setScanned] = useState([]);

  useEffect(() => {
    console.log("resultValue ", resultValue);
    if (resultValue?.length > 0) {
      updateScanned(resultValue);
    }
  }, [resultValue]);

  useEffect(() => {
    try {
      //Load the library on page load to speed things up.
      BarcodeScanner.loadWasm();
      setLibLoaded(true);
      showScanner();
    } catch (ex) {
      alert(ex.message);
      throw ex;
    }
  }, []);

  const showScanner = () => {
    setBShowScanner(true);
  };

  const appendMessage = (message) => {
    switch (message.type) {
      case "result":
        let txt = message.format + ": " + message.text;
        console.log("switch text ", txt);
        setResultValue(txt);
        break;
      case "error":
        console.log(message);
        setError(message?.msg || "An error occured.");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("scanned ", scanned);
  }, [scanned, scanned?.length]);

  const updateScanned = (str) => {
    console.log("scanned ", str);
    if (scanned.length > 0) {
      if (!scanned.includes(str)) {
        let tmp = scanned;
        tmp.push(str);
        console.log("tmp ", tmp);
        setScanned(tmp);
      }
    } else {
      let tmp = scanned;
      tmp.push(str);
      console.log("tmp ", tmp);
      setScanned(tmp);
    }
    console.log("scanned ", scanned);
  };

  return (
    <div className="relative w-full h-full">
      {!libLoaded ? <span>Loading Library...</span> : ""}
      {bShowScanner ? (
        <BarcodeScannerComponent appendMessage={appendMessage} />
      ) : (
        ""
      )}
      {error?.length > 0 && (
        <p className="text-error italic font-semibold text-center mt-5">
          {error}
        </p>
      )}

      {bShowScanner && resultValue?.length > 0 ? (
        <>
          <p className="text-sm font-semibold text-center mt-1 text-teal-400">
            Read
          </p>
          v
          <p className="text-lg italic font-semibold text-center text-teal-600">
            {resultValue}
          </p>
        </>
      ) : (
        <div className="h-7" />
      )}
      <div className="flex flex-wrap gap-2 justify-center text-white uppercase font-medium tracking-wide mt-5">
        {scanned?.length > 0 &&
          scanned.map((scan, i) => (
            <div key={i} className="bg-primary rounded-full px-4 py-3 text-lg">
              {scan}
            </div>
          ))}
      </div>
    </div>
  );
}
