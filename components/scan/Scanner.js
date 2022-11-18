import { useEffect, useState } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";
//custom
import BarcodeScannerComponent from "./BarcodeScanner";

import React from "react";

export default function Scanner({ updateScanned }) {
  const [libLoaded, setLibLoaded] = useState(null);
  const [resultValue, setResultValue] = useState(null);
  const [bShowScanner, setBShowScanner] = useState(null);
  const [error, setError] = useState("");

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
        setResultValue(txt);
        if (txt?.length > 0) {
          updateScanned(txt);
        }
        break;
      case "error":
        console.log(message);
        setError(message?.msg || "An error occured.");
        break;
      default:
        break;
    }
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
      <p className="text-sm font-semibold text-center mt-1 text-teal-400">
        Scanned
      </p>
      {bShowScanner && resultValue?.length > 0 ? (
        <p className="text-2xl italic font-semibold text-center text-teal-600">
          {resultValue}
        </p>
      ) : (
        <div className="h-8" />
      )}
    </div>
  );
}
