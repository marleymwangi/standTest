import { Component, useEffect, useState } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";
//custom
import BarcodeScannerComponent from "./BarcodeScanner";

import React from "react";

export default function Scanner() {
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
    <div className="h-[40vh] w-full pb-[10vh]">
      {!libLoaded ? <span>Loading Library...</span> : ""}
      {bShowScanner ? (
        <BarcodeScannerComponent appendMessage={appendMessage} />
      ) : (
        ""
      )}
      {error?.length > 0 && (
        <p className="text-error text-sm italic text-center mt-1">{error}</p>
      )}
      {bShowScanner ? (
        <input
          type="text"
          value={resultValue}
          readOnly={true}
          id="resultText"
        />
      ) : (
        ""
      )}
    </div>
  );
}
