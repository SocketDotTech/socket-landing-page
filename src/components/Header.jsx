import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../assets/socket-white-logo.png";
import { Menu } from "react-feather";
const linkStyle =
  "text-gray-400 hover:text-white cursor-pointer mx-4 transition-all";

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
    <header className="z-50 fixed w-screen top-0 left-0 px-5 md:px-10 py-2 md:py-4 backdrop-blur flex justify-between items-center bg-[#111111] bg-opacity-90">
      <img src={Logo} className="h-12 md:h-16" />

      <div
        className={`${isMobile ? mobileMenuStyle : "justify-end"} ${
          isMobileMenuOpen ? "right-0" : "-right-2/3"
        } trasnform transition-all flex flex-grow absolute md:static`}
      >
        <a
          className={`${linkStyle} ${isMobile ? mobileListStyle : ""}`}
          href="#team"
          onClick={toggleMenu}
        >
          Team
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
      </div>

      {isMobile && (
          <Menu className="text-white w-5 h-5 ml-4" onClick={toggleMenu} />
        )}
    </header>
  );
};
