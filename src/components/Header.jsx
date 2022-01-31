import Logo from "../assets/socket-white-logo.png";
const linkStyle = "text-gray-400 hover:text-white cursor-pointer mx-4 transition-all";

export const Header = () => {
  return (
    <header className=" px-10 py-4 backdrop-blur flex justify-between items-center">
      {/* <div className="container"> */}
        <img src={Logo} className="h-16" />

        <div className="flex flex-grow justify-center">
            <a className={linkStyle} href="/about">Team</a>
            <a className={linkStyle} href="/about">Careers</a>
            <a className={linkStyle} href="/about">Docs</a>
        </div>
      {/* </div> */}

      <a href="https:://app.fund.movr.network" className="text-sm font-medium bg-oc-theme-primary hover:bg-oc-theme-primary-dark text-white rounded-md px-4 py-2 transition-all">Bridge on Fund Movr</a>
    </header>
  );
};
