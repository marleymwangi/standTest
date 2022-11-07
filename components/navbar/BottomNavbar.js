import dynamic from "next/dynamic";
import { useRouter } from "next/router";
//custom
import NavItem from "../elements/NavItem";

//dynamic
const RiHome2Line = dynamic(
  async () => (await import("react-icons/ri")).RiHome2Line
);
const RiHome2Fill = dynamic(
  async () => (await import("react-icons/ri")).RiHome2Fill
);
const RiBookletLine = dynamic(
  async () => (await import("react-icons/ri")).RiBookletLine
);
const RiBookletFill = dynamic(
  async () => (await import("react-icons/ri")).RiBookletFill
);
const BsPeople = dynamic(async () => (await import("react-icons/bs")).BsPeople);
const BsPeopleFill = dynamic(
  async () => (await import("react-icons/bs")).BsPeopleFill
);

export default function BottomNavbar() {
  const router = useRouter();

  if (
    router.pathname.indexOf("/auth/") === 0 ||
    router.pathname.indexOf("/welcome") === 0
  ) {
    return null;
  } else {
    return (
      <div className="fixed bottom-0 z-40 w-screen border-t border-teal-500 bg-base-100 text-primary grid grid-cols-3">
        <NavItem
          href="/"
          selected={router.pathname === "/"}
          iconOn={RiHome2Fill}
          iconOff={RiHome2Line}
        />
        <NavItem
          href="/history"
          selected={router.pathname.indexOf("/history") === 0}
          iconOn={RiBookletFill}
          iconOff={RiBookletLine}
        />
        <NavItem
          href="/"
          selected={router.pathname.indexOf("/student/") === 0}
          iconOn={BsPeopleFill}
          iconOff={BsPeople}
        />
      </div>
    );
  }
}
