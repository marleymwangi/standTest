import dynamic from "next/dynamic";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
//custom
import ImageLoader from "../elements/imageLoader";
//dynamic
const HiBell = dynamic(async () => (await import("react-icons/hi")).HiBell);

export default function ModalUser() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
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
            <Link href="/notifications">
              <div className="btn btn-lg text-base btn-ghost bg-gray-100 btn-primary gap-2 shadow-md">
                <HiBell size="1.25em" />
                <p>Notifications</p>
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-lg btn-outline bg-gray-100 btn-primary gap-2 shadow-md"
            >
              <p>Logout</p>
              <div className="avatar relative">
                <div className="w-6 rounded-full">
                  <ImageLoader
                    src={session?.user?.image}
                    fallbackSrc="/assets/person.webp"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
