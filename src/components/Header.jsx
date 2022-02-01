import Logo from "../assets/socket-white-logo.png";
const linkStyle = "text-gray-400 hover:text-white cursor-pointer mx-4 transition-all";

export const Header = () => {
  return (
    <header className="z-50 fixed w-screen top-0 left-0 px-10 py-4 backdrop-blur flex justify-between items-center bg-[#111111] bg-opacity-90">
      {/* <div className="container"> */}
        <img src={Logo} className="h-16" />

        <div className="flex flex-grow justify-center">
            <a className={linkStyle} href="/about">Team</a>
            <a className={linkStyle} href="/about">Careers</a>
            <a className={linkStyle} href="/about">Docs</a>
        </div>
      {/* </div> */}

      <a href="https:://app.fund.movr.network" className="text-xs font-medium bg-oc-theme-primary hover:bg-oc-theme-primary-dark text-white rounded px-4 py-3 transition-all">FundMovr App</a>
    </header>
  );
};
