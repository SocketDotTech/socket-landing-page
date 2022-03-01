import framework from "../assets/investors/framework.svg";
import nascent from "../assets/investors/nascent.svg";
import geometry from "../assets/investors/geometry.svg";
import coinbase from "../assets/investors/coinbase.svg";
import archetype from "../assets/investors/archetype.svg";
import lightspeed from "../assets/investors/lightspeed.svg";
import egirl from "../assets/investors/egirl.svg";
import folius from "../assets/investors/folius.svg";
import maven11 from "../assets/investors/maven11.svg";
import frc from "../assets/investors/4rc.svg";
import markCuban from "../assets/investors/mark-cuban.svg";

const investors = [
  {
    img: framework,
    name: "Framework",
    url: "https://framework.ventures/",
    height: "26px",
  },
  {
    img: nascent,
    name: "Nascent",
    url: "https://www.nascent.xyz/",
    height: "40px",
  },
  {
    img: geometry,
    name: "Geometry",
    url: "https://www.geometrydao.xyz/",
    height: "40px",
  },
  {
    img: coinbase,
    name: "Coinbase",
    url: "https://www.coinbase.com/",
    height: "28px",
  },
  {
    img: archetype,
    name: "Archetype",
    url: "https://www.archetype.fund/",
    height: "33px",
  },
  {
    img: lightspeed,
    name: "Lightspeed",
    url: "https://lsvp.com/",
    height: "53px",
  },
  {
    img: egirl,
    name: "EGirl",
    url: "https://www.egirlcapital.com/",
    height: "33px",
  },
  {
    img: folius,
    name: "Folius",
    url: "https://www.folius.ventures/",
    height: "40px",
  },
  {
    img: maven11,
    name: "Maven11",
    url: "https://www.maven11.com/",
    height: "19px",
  },
  {
    img: frc,
    name: "FRC",
    url: "https://www.fourthrevolution.capital/",
    height: "30px",
  },
  {
    img: markCuban,
    name: "Mark Cuban",
    url: "https://markcubancompanies.com/",
    height: "30px",
  },
];

const angel = [
  {
    name: "Sandeep Nailwal",
    role: "Founder",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Sandeep Nailwal",
    role: "Founder",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Rishabh Khurana",
    role: "Founder",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Salil Naik",
    role: "Founder",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Sandeep Nailwal",
    role: "Founder",
    url: "https://twitter.com/sandeepnailwal",
  },
];

export const Investors = () => {
  return (
    <div className="pt-10 md:pt-20 px-5 md:px-0 container mx-auto">
      <h2 className="text-white text-2xl md:text-5xl font-bold text-center mb-4">
        Investors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {investors.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-center mb-8 sm:mb-14 mx-auto">
              <a
                href={item.url}
                target="_blank"
                className="opacity-75 hover:opacity-100"
              >
                <img
                  src={item.img}
                  alt={`${item.name} logo`}
                  style={{ height: item.height }}
                  className="scale-75 sm:scale-100"
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {angel.map((item, index) => {
            return (
          <a
            href={item.url}
            target="_blank"
            className="opacity-75 hover:opacity-100 text-white flex flex-col justify-center items-center mb-8 sm:mb-14 scale-75 sm:scale-100"
          >
            <span className="text-2xl font-medium text-center">{item.name}</span>
            <span className="text-sm text-gray-200 text-center">{item.role}</span>
          </a>)
        })}
      </div>
    </div>
  );
};
