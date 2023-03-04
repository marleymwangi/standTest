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
const RiQuestionLine = dynamic(
  async () => (await import("react-icons/ri")).RiQuestionLine
);
const RiQuestionFill = dynamic(
  async () => (await import("react-icons/ri")).RiQuestionFill
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
      <div className="fixed bottom-0 z-40 w-screen border-t border-secondary bg-base-100 text-primary grid grid-cols-4">
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
          href="/user"
          selected={router.pathname.indexOf("/user") === 0}
          iconOn={BsPeopleFill}
          iconOff={BsPeople}
        />
        <NavItem
          href="/feedback"
          selected={router.pathname.indexOf("/feedback") === 0}
          iconOn={RiQuestionFill}
          iconOff={RiQuestionLine}
        />
      </div>
    );
  }
}
