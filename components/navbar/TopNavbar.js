import dynamic from "next/dynamic";
import { useRouter } from "next/router";
//dynamic
const BiLeftArrow = dynamic(
  async () => (await import("react-icons/bi")).BiLeftArrow
);
const HiDotsVertical = dynamic(
  async () => (await import("react-icons/hi")).HiDotsVertical
);

export default function TopNavbar() {
  const router = useRouter();
  const size = "1.5em";

  const handleBack = () => {
    router.back();
  };

  if (
    router.pathname.indexOf("/auth/") === 0 ||
    router.pathname.indexOf("/welcome") === 0
  ) {
    return null;
  } else {
    return (
      <nav className="fixed top-0 z-40 border-b border-secondary bg-base-100 shadow max-w-screen w-full p-1 flex justify-between text-primary">
        <div onClick={handleBack} className="grid place-content-center">
          <button className="btn btn-circle btn-ghost">
            <BiLeftArrow size={size} />
          </button>
        </div>
        <div className="grid place-content-center text-secondary font-poppins font-medium capitalize">
          <span>
            {router.pathname === "/" ? (
              "home"
            ) : router.pathname.indexOf("/user/") === 0 ? (
              router.pathname.slice(6)
            ) : (
              router.pathname.slice(1)
            )}
          </span>
        </div>
        <div className="grid place-content-center">
          <label
            htmlFor="user_modal"
            className="btn btn-circle btn-ghost modal-button"
          >
            <HiDotsVertical size={size} />
          </label>
        </div>
      </nav>
    );
  }
}
