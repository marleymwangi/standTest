import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";
//custom
import Scanner from "../scan/Scanner";
//dynamic
const HiBell = dynamic(async () => (await import("react-icons/hi")).HiBell);

export default function ModalScan() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
    handleCloseModal();
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
          <div className="grid gap-4 w-full text-center text-primary font-poppins">
            <Scanner />
          </div>
        </div>
      </div>
    </div>
  );
}
