import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../assets/socket-white-logo.png";
import { Menu, X } from "react-feather";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const linkStyle =
  "text-white hover:text-white/80 cursor-pointer transition-all text-lg font-bold";

const mobileMenuStyle = "text-socket-gray-90 font-medium";
const mobileListStyle = "text-center bg-oc-dark p-2 rounded-sm my-1";
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
        <Anchor
          url="https://angel.co/company/socket-tech/jobs"
          classNames={linkStyle}
        >
          Careers
        </Anchor>
        <Anchor url="https://docs.socket.tech" classNames={linkStyle}>
          Docs
        </Anchor>
        <Link className={linkStyle} to="team" onClick={toggleMenu}>
          Team
        </Link>
      </div>

      <div className="hidden flex-1 lg:flex justify-end items-center">
        <Button
          type="link"
          url="https://bungee.exchange/"
          bgColor="bg-socket-gray-100"
          textColor="text-white"
        >
          Try Bungee App
        </Button>
      </div>

      <MenuBtn>
        <Menu className="lg:hidden text-white w-4 h-4" onClick={toggleMenu} />
      </MenuBtn>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="bg-white p-5 shadow-xl fixed top-3 left-3 rounded-lg"
          style={{ width: "calc(100% - 24px)" }}
        >
          <div className="flex">
            <div className="flex flex-col flex-1">
              <h3 className="text-socket-gray-70 font-bold uppercase mb-2">
                Navigation
              </h3>
              <ul className="flex flex-col gap-1">
                <Link to="/" className={mobileMenuStyle}>
                  Home
                </Link>
                <Anchor
                  url="https://angel.co/company/socket-tech/jobs"
                  classNames={mobileMenuStyle}
                >
                  Careers
                </Anchor>
                <Anchor
                  url="https://docs.socket.tech"
                  classNames={mobileMenuStyle}
                >
                  Docs
                </Anchor>
                <Link to="/" className={mobileMenuStyle}>
                  Team
                </Link>
              </ul>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-socket-gray-70 font-bold uppercase mb-2">
                Resources
              </h3>
              <ul className="flex flex-col gap-1">
                {resources.map((item) => (
                  <Anchor url={item.url} classNames={mobileMenuStyle}>
                    {item.title}
                  </Anchor>
                ))}
              </ul>
            </div>
          </div>

          {/* Bungee CTA */}
          <a
            href="https://bungee.exchange/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-socket-theme text-white font-bold py-4 rounded-lg flex items-center justify-center mt-7"
          >
            Try Bungee app
          </a>

          {/* Close button */}
          <MenuBtn classes="bg-black/10 absolute top-2 right-2">
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
      onClick={onClick ?? null}
      className={classNames}
    >
      {children}
    </a>
  );
};
