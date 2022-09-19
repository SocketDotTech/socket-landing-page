import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../assets/socket-white-logo.png";
import { Menu, X } from "react-feather";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const linkStyle =
  "text-white hover:text-white/80 cursor-pointer transition-all text-lg font-bold";

const mobileMenuStyle = "text-socket-gray-90 font-medium";
const resources = [
  {
    title: "Socket API docs",
    url: "https://docs.socket.tech/socket-api/introduction",
  },
  {
    title: "Plugin docs",
    url: "https://sockettech.notion.site/Socket-Widget-Docs-b905871870e343c6833169ebbd356790",
  },
  {
    title: "SDK docs",
    url: "https://socketdottech.github.io/socket-v2-sdk-docs/",
  },
];

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
        <Link to="/">
          <img src={Logo} className="h-12 md:h-16" />
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-[48px] flex-1">
        <Link className={linkStyle} to="/">
          Home
        </Link>
        <Anchor url="https://docs.socket.tech" classNames={linkStyle}>
          Docs
        </Anchor>
        <Link className={linkStyle} to="team">
          Team
        </Link>
        <Anchor
          url="https://angel.co/company/socket-tech/jobs"
          classNames={linkStyle}
        >
          Careers
        </Anchor>
      </div>

      <div className="hidden flex-1 lg:flex justify-end items-center">
        <Button
          type="link"
          url="https://bungee.exchange/"
          bgColor="bg-socket-gray-100"
          textColor="text-white"
          external
        >
          Try Bungee
        </Button>
      </div>

      <MenuBtn>
        <Menu className="lg:hidden text-white w-4 h-4" onClick={toggleMenu} />
      </MenuBtn>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="bg-white p-5 shadow-xl fixed top-3 right-3 rounded-lg w-1/2"
          // style={{ width: "calc(100% - 24px)" }}
        >
          <div className="flex">
            <div className="flex flex-col flex-1">
              <h3 className="text-socket-gray-70 font-bold uppercase mb-2">
                Navigation
              </h3>
              <ul className="flex flex-col gap-1 items-start">
                <Link
                  to="/"
                  className={mobileMenuStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Anchor
                  url="https://docs.socket.tech"
                  classNames={mobileMenuStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </Anchor>
                <Link
                  to="/team"
                  className={mobileMenuStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Anchor
                  url="https://angel.co/company/socket-tech/jobs"
                  classNames={mobileMenuStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Anchor>
              </ul>
            </div>
            {/* <div className="flex flex-col flex-1">
              <h3 className="text-socket-gray-70 font-bold uppercase mb-2">
                Resources
              </h3>
              <ul className="flex flex-col gap-1 items-start">
                {resources.map((item, index) => (
                  <Anchor
                    url={item.url}
                    classNames={mobileMenuStyle}
                    key={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Anchor>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Bungee CTA */}
          <a
            href="https://bungee.exchange/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-socket-theme text-white font-bold py-4 rounded-lg flex items-center justify-center mt-7"
          >
            Try Bungee
          </a>

          {/* Close button */}
          <MenuBtn classes="bg-black/20 absolute top-2 right-2">
            <X
              className="lg:hidden text-socket-gray-100 w-4 h-4"
              onClick={toggleMenu}
            />
          </MenuBtn>
        </div>
      )}
    </header>
  );
};

const MenuBtn = ({ children, classes }) => {
  return (
    <div
      className={`lg:hidden bg-white/25 flex items-center px-2.5 py-1 rounded-full ${classes}`}
    >
      {children}
    </div>
  );
};

const Anchor = ({ children, url, classNames, onClick }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={classNames}
    >
      {children}
    </a>
  );
};
