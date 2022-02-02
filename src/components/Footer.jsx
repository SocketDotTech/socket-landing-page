import logo from "../assets/socket-white-logo.png";
import ocLove from "../assets/oc-love.svg";
import socketAssets from "../assets/Socket_Assets.zip";
const liStyle =
  "text-gray-300 hover:text-white cursor-pointer transition-all mx-2 text-sm md:text-base mb-1.5 md:mb-0";
export const Footer = () => {
  return (
    <div className="bg-oc-theme-dark">
      <div className="container border-b border-dashed border-gray-600 border-opacity-50 pt-16 pb-5 px-5 mx-auto">
        <div className="flex justify-evenly md:justify-between md:items-center">
          <div className="flex flex-1 mr-3 md:mr-0">
            <img src={logo} alt="socket logo" className="h-12 md:h-16" />
          </div>

          {/* links */}
          <ul className="flex flex-col md:flex-row flex-1 justify-center md:border-l md:border-r border-gray-400">
            <li className={liStyle}>
              <a
                href="https://movrnetwork.notion.site/We-should-work-together-5cc360ba8df94399948c573a21833804"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li className={liStyle}>
              <a
                href="https://docs.socket.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </li>
            <li className={liStyle}>
              <a href="https://medium.com/socketdottech" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li className={liStyle}>
              <a href={socketAssets} download>
                Media Kit
              </a>
            </li>
          </ul>

          {/* social */}
          <ul className="flex flex-col md:flex-row flex-1 md:justify-end">
            <li className={liStyle}>
              <a
                href="https://discord.com/invite/UFgG72rp42"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li className={liStyle}>
              <a
                href="https://twitter.com/socketdottech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-5 py-5 md:py-10 mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm md:text-base mb-2 md:mb-0">
          All rights reserved
        </p>
        <p className="text-gray-300 flex items-center text-sm md:text-base">
          Made with{" "}
          <img src={ocLove} className="h-5 w-5 mx-1.5 border border-gray-300" />{" "}
          by the OCs
        </p>
      </div>
    </div>
  );
};
