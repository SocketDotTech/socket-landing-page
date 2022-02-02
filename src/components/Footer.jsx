import logo from "../assets/socket-white-logo.png";
import ocLove from "../assets/oc-love.svg";
const liStyle =
  "text-gray-300 hover:text-white cursor-pointer transition-all mx-2";
export const Footer = () => {
  return (
    <div className="bg-oc-theme-dark">
      <div className="container border-b border-dashed border-gray-600 border-opacity-50 pt-16 pb-5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-1">
          <img src={logo} alt="socket logo" className="h-20" />
          </div>

          {/* links */}
          <ul className="flex flex-1 justify-center border-l border-r border-gray-400">
            <li className={liStyle}>
              <a href="">Careers</a>
            </li>
            <li className={liStyle}>
              <a href="">Docs</a>
            </li>
            <li className={liStyle}>
              <a href="">Blog</a>
            </li>
            <li className={liStyle}>
              <a href="">Media Kit</a>
            </li>
          </ul>

          {/* social */}
          <ul className="flex flex-1 justify-end">
            <li className={liStyle}>
              <a href="">Discord</a>
            </li>
            <li className={liStyle}>
              <a href="">Twitter</a>
            </li>
            <li className={liStyle}>
              <a href="">Telegram</a>
            </li>
            <li className={liStyle}>
              <a href="">Linked</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-10 mx-auto flex justify-between items-center">
        <p className="text-gray-400">All rights reserved</p>
        <p className="text-gray-300 flex items-center">Made with <img src={ocLove} className="h-5 w-5 mx-1.5 border border-gray-300"/> by the OCs</p>
      </div>
    </div>
  );
};
