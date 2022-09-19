import framework from "../assets/investors/new/framework.svg";
import nascent from "../assets/investors/new/nascent.svg";
import geometry from "../assets/investors/new/geometry.svg";
import coinbase from "../assets/investors/new/coinbase.svg";
import archetype from "../assets/investors/new/archetype.svg";
import lightspeed from "../assets/investors/new/lightspeed.svg";
import egirl from "../assets/investors/new/egirl.svg";
import folius from "../assets/investors/new/folius.svg";
import maven11 from "../assets/investors/new/maven11.svg";
import frc from "../assets/investors/new/4rc.svg";
import mark from "../assets/investors/new/mark.svg";

const investors = [
  {
    img: framework,
    name: "Framework",
    url: "https://framework.ventures/",
  },
  {
    img: nascent,
    name: "Nascent",
    url: "https://www.nascent.xyz/",
  },
  {
    img: geometry,
    name: "Geometry",
    url: "https://www.geometrydao.xyz/",
  },
  {
    img: coinbase,
    name: "Coinbase",
    url: "https://www.coinbase.com/",
  },
  {
    img: maven11,
    name: "Maven11",
    url: "https://www.maven11.com/",
  },
  {
    img: archetype,
    name: "Archetype",
    url: "https://www.archetype.fund/",
  },
  {
    img: lightspeed,
    name: "Lightspeed",
    url: "https://lsvp.com/",
  },
  {
    img: egirl,
    name: "EGirl",
    url: "https://www.egirlcapital.com/",
  },
  {
    img: folius,
    name: "Folius",
    url: "https://www.folius.ventures/",
  },
  {
    img: frc,
    name: "FRC",
    url: "https://www.fourthrevolution.capital/",
  },
  {
    img: mark,
    name: 'Mark Cuban Companies',
    url: "https://markcubancompanies.com/",
  }
];

const angel = [
  {
    name: "Sandeep Nailwal",
    role: "Co-Founder, Polygon",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Jinglan Wan",
    role: "Co-Founder, Optimism",
    url: "https://twitter.com/jinglejamOP",
  },
  {
    name: "David Hoffman",
    role: "Bankless",
    url: "https://twitter.com/TrustlessState",
  },
  {
    name: "Ryan Sean Adams",
    role: "Bankless",
    url: "https://twitter.com/RyanSAdams",
  },
  {
    name: "0xMaki",
    role: "DeFi Legend",
    url: "https://twitter.com/0xMaki",
  },
  {
    name: "Robert Miller",
    role: "Flashbots",
    url: "https://twitter.com/bertcmiller",
  },
  {
    name: "Jaynti Kanani",
    role: "Co-Founder, Polygon",
    url: "https://twitter.com/_jdkanani",
  },
  {
    name: "Seb Audet",
    role: "Co-Founder, Zapper.fi",
    url: "https://twitter.com/sebaudet26"
  },
  {
    name: "40+ kickass backers",
  },
];

export const Investors = () => {
  return (
    <div className="bg-white pt-14 pb-14">
      <div className="socket-container mx-auto">
        <h2 className="heading-2 text-center">Backed by the Best</h2>
        {/* <p className="supportive-text text-center mt-1">
          Our global investors include angel investors and leading funds
        </p> */}
        <div className="grid gap-x-[18px] gap-y-2 md:gap-y-6 justify-center mt-[3.75rem] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1200px] mx-auto">
          {investors.map((item, index) => (
            <InvestorLogo logo={item.img} url={item.url} key={index} />
          ))}

          {angel.map((item, index) => (
            <AngelInvestor
              url={item.url}
              investor={item.name}
              designation={item.role}
              key={`angel-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const InvestorLogo = ({ logo, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logo} className="h-[4.625rem]" />
    </a>
  );
};

const AngelInvestor = ({ url, investor, designation }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center h-[4.625rem]"
    >
      <span className="text-center text-lg md:text-xl font-bold text-socket-gray-90">
        {investor}
      </span>
      <span className="text-center text-sm font-medium text-socket-gray-70">
        {designation}
      </span>
    </a>
  );
};
