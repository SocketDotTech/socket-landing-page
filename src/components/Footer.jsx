import socketLogo from "../assets/socket-logo-black.svg";

const navItmes = {
  product: [
    {
      title: "Bungee",
      url: "https://bungee.exchange/",
    },
    {
      title: "Refuel",
      url: "https://www.bungee.exchange/refuel",
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
          <div>
            <img src={socketLogo} />
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
        {/* <div className="py-7 border-t border-black/[0.07] flex justify-between items-center">
          <p className="text-lg font-medium text-black/80">
            Partnership contact:{" "}
            <a href="mailto:sales@socket.tech">sales@socket.tech</a>
          </p>
          <div></div>
        </div> */}
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
