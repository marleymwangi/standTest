import dynamic from "next/dynamic";
import Link from "next/link";
import { useAuth } from "../../context/authContext";
//custom
import ImageLoader from "../elements/imageLoader";
//dynamic
const HiBell = dynamic(async () => (await import("react-icons/hi")).HiBell);

export default function ModalUser() {
  const { user, Logout } = useAuth();
  const handleLogout = (e) => {
    Logout();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    document.getElementById("user_modal").checked = false;
  };

  return (
    <div>
      <input type="checkbox" id="user_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box pb-20">
          <div className="flex items-center justify-between pb-6">
            <p className="text-lg text-primary">User Options</p>
            <label
              htmlFor="user_modal"
              className="btn btn-sm btn-primary btn-outline btn-circle shadow-md"
            >
              ✕
            </label>
          </div>
          <div className="grid gap-4 w-full text-center text-primary font-poppins">
            <button
              onClick={handleLogout}
              className="btn btn-lg btn-outline bg-gray-100 btn-primary gap-2 shadow-md"
            >
              <p>Logout</p>
              <div className="avatar relative">
                <div className="w-6 rounded-full">
                  <div className="relative bg-primary w-full h-full">
                    <p className="abs-center text-white">
                      {user?.email?.slice(0, 1)}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
