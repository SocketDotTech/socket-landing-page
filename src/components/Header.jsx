import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../assets/socket-white-logo.png";
import { Menu } from "react-feather";
import { Button } from "./Button";
const linkStyle =
  "text-white hover:text-white/80 cursor-pointer transition-all text-lg font-bold";

const mobileMenuStyle =
  "bg-[#111111] backdrop-blur top-16 w-2/3 h-screen flex-col absolute z-10 py-3";
const mobileListStyle = "text-center bg-oc-dark p-2 rounded-sm my-1";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      updateScreenSize();
    });
  });

  useEffect(() => {
    updateScreenSize();
  }, []);

  const updateScreenSize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    } else setIsMobile(true);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-[#8633F2] z-50 fixed w-screen top-0 left-0 px-5 md:px-10 py-2 md:py-3 backdrop-blur flex justify-between items-center bg-socket-theme bg-opacity-95">
      <div className="flex-1">
        <img src={Logo} className="h-12 md:h-16" />
      </div>

      <div className="flex items-center justify-center gap-[48px] flex-1">
        <a
          className={`${linkStyle} ${isMobile ? mobileListStyle : ""}`}
          href="/"
        >
          Home
        </a>
        <a
          className={`${linkStyle} ${isMobile ? mobileListStyle : ""}`}
          href="https://angel.co/company/socket-tech/jobs"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Careers
        </a>
        <a
          className={`${linkStyle} ${isMobile ? mobileListStyle : ""}`}
          href="https://docs.socket.tech"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Docs
        </a>
        <a
          className={`${linkStyle} ${isMobile ? mobileListStyle : ""}`}
          href="https://docs.socket.tech"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Team
        </a>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <Button
          type="link"
          url="https://bungee.exchange/"
          bgColor="bg-socket-gray-100"
          textColor="text-white"
        >
          Try Bungee App
        </Button>
      </div>

      {isMobile && (
        <Menu className="text-white w-5 h-5 ml-4" onClick={toggleMenu} />
      )}
    </header>
  );
};
