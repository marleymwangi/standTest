import { useEffect } from "react";
//custom
import TopNavbar from "../components/navbar/TopNavbar";
import BottomNavbar from "../components/navbar/BottomNavbar";
import Banner from "../components/elements/Banner";
import Modals from "../components/modal";


export default function Layout({ children }) {
  const enableDarkMode = () => {
    document.documentElement.classList.add("dark");
  };

  useEffect(() => {
    var element = document.getElementById("loader");
    if (element) {
      element.classList.add("hidden");
    }
  }, []);

  return (
    <div className="">
      <TopNavbar />
      <div className="max-w-screen overflow-y-scroll overflow-x-hidden custom-scroll">
        {children}
      </div>
      <Modals/>
      <Banner />
      <BottomNavbar />
    </div>
  );
}
