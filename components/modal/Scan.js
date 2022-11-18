import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
//custom
import Scanner from "../scan/QrScanner";
//dynamic
const HiBell = dynamic(async () => (await import("react-icons/hi")).HiBell);

export default function ModalScan() {
  const [scanned, setScanned] = useState([]);

  const updateScanned = (str) => {
    console.log("scanned ", str)
    if (scanned.length > 0) {
      if (!scanned.includes(str)) {
        let tmp = scanned;
        tmp.push(str);
        console.log("tmp ", tmp)
        setScanned(tmp);
      }
    } else {
      let tmp = scanned;
      tmp.push(str);
      console.log("tmp ", tmp)
      setScanned(tmp);
    }
    console.log("scanned ", scanned)
  };

  const handleCloseModal = () => {
    document.getElementById("scan_modal").checked = false;
  };

  return (
    <div>
      <input type="checkbox" id="scan_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box pb-20">
          <div className="flex items-center justify-between pb-6">
            <p className="text-lg text-primary">Barcode Scanner</p>
            <label
              htmlFor="scan_modal"
              className="btn btn-sm btn-primary btn-outline btn-circle shadow-md"
            >
              ✕
            </label>
          </div>
          <div className="grid overflow-hidden pb-[10vh]">
            <Scanner updateScanned={updateScanned} />
            <div className="flex flex-wrap gap-2 justify-center text-white uppercase font-medium tracking-wide mt-5">
              {scanned?.length > 0 &&
                scanned.map((scan, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-full px-4 py-3 text-lg"
                  >
                    {scan}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
