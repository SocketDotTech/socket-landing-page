import logo from "../assets/socket-white-logo.png"
const liStyle = "text-gray-300 hover:text-white cursor-pointer transition-all ml-4";
export const Footer = () => {
  return (
    <div className="bg-oc-theme-dark">
      <div className="container border-t border-dashed border-b border-gray-600 border-opacity-50 py-10 mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="socket logo" className="h-20" />
          <ul className="flex">
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
        </div>
      </div>
      <div className="container py-10 mx-auto flex justify-between items-center">
        <p className="text-gray-300">All rights reserved</p>
        <ul className="flex">
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
  );
};
