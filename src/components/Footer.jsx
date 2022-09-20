import Twitter from "../assets/icons/twitter.svg";
import Discord from "../assets/icons/discord.svg";
import OCLove from "../assets/icons/oc-love.svg";
import socketLogo from "../assets/socket-logo-black.svg";

const navItmes = {
  product: [
    {
      title: "Bungee",
      url: "https://bungee.exchange/",
    },
    {
      title: "Refuel",
      url: "https://bungee.exchange/refuel",
    },
  ],
  resources: [
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
  ],
  company: [
    { title: "Blog", url: "https://medium.com/socketdottech" },
    {
      title: "Brand Assets",
      url: "",
    },
    {
      title: "Careers",
      url: "https://angel.co/company/socket-tech/jobs",
    },
  ],
};

export const Footer = () => {
  return (
    <div className="bg-white pt-[3.375rem]">
      <div className="socket-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pb-12 lg:px-[5.6875rem]">
          <div className="flex flex-col justify-between items-start">
            <img src={socketLogo} />
            {/* <div className="flex">
              <a href="https://twitter.com/SocketDotTech" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} />
              </a>
              <a href="https://discord.gg/zfKJR8yWaH" target="_blank" rel="noopener noreferrer">
              <img src={Discord} />
              </a>
            </div> */}
          </div>
          <div>
            <NavTitle>Products</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.product.map((item) => (
                <NavItem label={item.title} url={item.url} key={item.title} />
              ))}
            </div>
          </div>
          <div>
            <NavTitle>Docs</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.resources.map((item) => (
                <NavItem label={item.title} url={item.url} key={item.title} />
              ))}
            </div>
          </div>
          <div>
            <NavTitle>Company</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.company.map((item) => (
                <NavItem label={item.title} url={item.url} key={item.title} />
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="py-7 border-t border-black/[0.07] flex justify-between items-center lg:px-[5.6875rem]">
          <p className="font-medium text-black/80 flex items-center">
            Made with <img src={OCLove} className="w-5 h-5 mx-1.5"/> by the OCs
          </p>
          <div className="flex gap-5">
              <a href="https://twitter.com/SocketDotTech" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} className="w-7"/>
              </a>
              <a href="https://discord.gg/zfKJR8yWaH" target="_blank" rel="noopener noreferrer">
              <img src={Discord} className="w-7"/>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

const NavTitle = ({ children }) => {
  return (
    <h4 className="text-[#07011A]/[0.58] font-bold uppercase mb-4">
      {children}
    </h4>
  );
};
const NavItem = ({ label, url }) => {
  return (
    <a
      href={url}
      className="text-black/80 text-lg font-medium leading-[26.1px]"
    >
      {label}
    </a>
  );
};
