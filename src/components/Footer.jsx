import socketLogo from "../assets/socket-logo-black.svg";

const navItmes = {
  product: [
    {
      title: "Bungee",
      url: "https://bungee.exchange/",
    },
    {
      title: "Socket API",
      url: "",
    },
    {
      title: "Socket Plugin",
      url: "",
    },
    {
      title: "Socket Scan",
      url: "",
    },
    {
      title: "Socket SDK",
      url: "",
    },
    {
      title: "Refuel",
      url: "https://www.bungee.exchange/refuel",
    },
  ],
  resources: [
    {
      title: "API docs",
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
    { title: "Blog", url: "https://medium.com/socketdottech" },
  ],
  company: [
    {
      title: "About",
      url: "",
    },
    {
      title: "Brand Assets",
      url: "",
    },
    {
      title: "Careers",
      url: "",
    },
    {
      title: "Contact",
      url: "",
    },
    {
      title: "Privacy Policy",
      url: "",
    },
  ],
};

export const Footer = () => {
  return (
    <div className="bg-white pt-[3.375rem]">
      <div className="container mx-auto">
        <div className="flex pb-12">
          <div className="flex-1">
            <img src={socketLogo} />
          </div>
          <div className="flex-1">
            <NavTitle>Product</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.product.map((item) => (
                <NavItem label={item.title} url={item.url} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <NavTitle>Resources</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.resources.map((item) => (
                <NavItem label={item.title} url={item.url} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <NavTitle>Company</NavTitle>
            <div className="flex flex-col gap-2">
              {navItmes.company.map((item) => (
                <NavItem label={item.title} url={item.url} />
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="py-7 border-t border-black/[0.07] flex justify-between items-center">
          <p className="text-lg font-medium text-black/80">
            Partnership contact:{" "}
            <a href="mailto:sales@socket.tech">sales@socket.tech</a>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const NavTitle = ({ children }) => {
  return (
    <h4 className="text-[#07011A]/[0.58] font-bold uppercase mb-4">{children}</h4>
  );
};
const NavItem = ({ label, url }) => {
  return (
    <a href={url} className="text-black/80 text-lg font-medium">
      {label}
    </a>
  );
};
