import dynamic from "next/dynamic";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
//custom
import ImageLoader from "../elements/imageLoader";
//dynamic
const HiBell = dynamic(async () => (await import("react-icons/hi")).HiBell);

export default function ModalDrop() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    document.getElementById("trans_modal").checked = false;
  };

  return (
    <div>
      <input type="checkbox" id="trans_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box pb-20">
          <div className="flex items-center justify-between pb-6">
            <p className="text-lg text-primary font-medium">Drop Off Details</p>
            <label
              htmlFor="trans_modal"
              className="btn btn-sm btn-primary btn-outline btn-circle shadow-md"
            >
              ✕
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full text-primary font-poppins mt-[2vh]">
            <p className="text-gray-400">Name</p>{" "}
            <p className="font-medium">Bob Mwangi</p>
            <p className="text-gray-400">Phone Number</p>{" "}
            <p className="font-medium">+254720010700</p>
            <p className="text-gray-400">Voucher Status</p>{" "}
            <p className="font-medium">Pending</p>
            <p className="col-span-2 text-lg font-semibold mt-6">Containers</p>
            <p>Pernod</p>{" "}
            <p>
              {" "}
              <span className="font-bold text-lg">2</span> containers
            </p>
            <p>Coca Cola</p>{" "}
            <p>
              <span className="font-bold text-lg">2</span> containers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
