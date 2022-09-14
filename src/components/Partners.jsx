import perpetualIcon from "../assets/partners/icons/perpetual.svg";
const partners = [
  {
    name: "Perpetual Protocol",
    icon: perpetualIcon,
  },
  {
    name: "Synthetix",
    icon: perpetualIcon,
  },
  {
    name: "Premia",
    icon: perpetualIcon,
  },
  {
    name: "dHedge",
    icon: perpetualIcon,
  },
  {
    name: "Rubicon",
    icon: perpetualIcon,
  },
  {
    name: "Polynomial",
    icon: perpetualIcon,
  },
  {
    name: "Brahma.fi",
    icon: perpetualIcon,
  },
  {
    name: "Tetu",
    icon: perpetualIcon,
  },
  {
    name: "OnDefy",
    icon: perpetualIcon,
  },
  {
    name: "Atlantis Loan",
    icon: perpetualIcon,
  },
  {
    name: "Sequence",
    icon: perpetualIcon,
  },
  {
    name: "Steakwallet",
    icon: perpetualIcon,
  },
  {
    name: "Zapper",
    icon: perpetualIcon,
  },
  {
    name: "Zerion",
    icon: perpetualIcon,
  },
  {
    name: "OneKey",
    icon: perpetualIcon,
  },
  {
    name: "imToken",
    icon: perpetualIcon,
  },
  {
    name: "Choice",
    icon: perpetualIcon,
  },
  {
    name: "Via Exchange",
    icon: perpetualIcon,
  },
  {
    name: "Etherspot",
    icon: perpetualIcon,
  },
  {
    name: "Plasma Finance",
    icon: perpetualIcon,
  },
  {
    name: "Orange Wallet",
    icon: perpetualIcon,
  },
  {
    name: "Ambire Wallet",
    icon: perpetualIcon,
  },
];

export const Partners = () => {
  return (
    <div className="bg-white pt-16 pb-8">
      <div className="md:container rounded-[32px] overlay-bg mx-auto pt-14 pb-8 px-11">
        <h2 className="heading-2 text-center">Powering the Best</h2>
        <p className="supporting-text text-center mt-2">
          Socket powers interoperability for the biggest decentralised apps and
          wallets in the space
        </p>
        <div className="flex flex-wrap gap-[13px] mt-10 justify-center">
          {partners.map((item) => (
            <IconTab name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const IconTab = ({ name, icon }) => {
  return (
    <div className="py-1.5 px-[1.125rem] bg-white flex gap-3 items-center">
      <div className="border border-black/[0.02] rounded-[6.5px] h-[2.375rem] w-[2.375rem] flex items-center justify-center">
        <img src={icon} />
      </div>
      <p className="text-socket-gray-80 font-extrabold">{name}</p>
    </div>
  );
};
