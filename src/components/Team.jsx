import patternLight from "../assets/pattern-light.svg";
import salil from "../assets/team/salil.png";
import dpb from "../assets/team/dpb.png";
import absolute from "../assets/team/absolute.jpg";
import varun from "../assets/team/varun.jpg";
import vc from "../assets/team/vc.jpg";
import rk from "../assets/team/rk.jpg";
import arth from "../assets/team/arth.jpg";
import vamsi from "../assets/team/vamsi.jpg";
import shrey from "../assets/team/shrey.jpg";
import sriram from "../assets/team/sriram.jpg";
import aniket from "../assets/team/aniket.jpg";

const teamList = [
  {
    name: "Vaibhav Chellani",
    role: "Co-founder",
    twitter: "vaibhavchellani",
    imgSrc: vc,
  },
  {
    name: "Rishabh Khurana",
    role: "Co-founder",
    twitter: "khuranarishabh0",
    imgSrc: rk,
  },
  {
    name: "Arth Patel",
    role: "Head of Engineering",
    twitter: "arthcp",
    imgSrc: arth,
  },
  {
    name: "Vamsi Reddy",
    role: "Senior Blockchain Developer",
    twitter: "reddyismav",
    imgSrc: vamsi,
  },
  {
    name: "Aniket Sharma",
    role: "Blockchain Developer",
    twitter: "aniket965as",
    imgSrc: aniket,
  },
  {
    name: "Salil Naik",
    role: "Senior Frontend Developer",
    twitter: "0xSalilNaik",
    imgSrc: salil,
  },
  {
    name: "Varun",
    role: "Product Manager",
    twitter: null,
    imgSrc: varun,
  },
  {
    name: "Shrey Keny",
    role: "Engineer, Dev-Rel, Documaster",
    twitter: "ShreyKeny",
    imgSrc: shrey,
  },
  {
    name: "Sriram Vasudevan",
    role: "Marketing & Community",
    twitter: "sriramvas",
    imgSrc: sriram,
  },
  {
    name: "Absolute",
    role: "Community",
    twitter: "AbsoluteUknit",
    imgSrc: absolute,
  },
  {
    name: "Devain Pal Bansal",
    role: "Researcher / Information Architect",
    twitter: "dpbmaverick98",
    imgSrc: dpb,
  },
];

export const Team = () => {
  return (
    <div className="relative overflow-hidden py-10 md:py-20" id="team">
      <div
        className="absolute h-full bg-[length:240px_240px] rotate-45"
        style={{
          backgroundImage: `url(${patternLight})`,
          top: "590px",
          left: "610px",
          width: "700px",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#17171F]"></div>
      </div>
      <div className="container mx-auto mb-14 relative">
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center mb-4">
          Our team
        </h2>
        <p className="text-gray-300 text-center text-sm md:text-base">
          super coders and cross chain enthusiasts
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 relative">
        {teamList.map((member, index) => {
          return <Person key={index} data={member} />;
        })}
      </div>
    </div>
  );
};

const Person = ({ data }) => {
  return (
    <div className="mb-1 md:mb-5 flex flex-col items-center p-5 rounded-md">
      <p className="text-center font-medium text-white hover:underline text-sm md:text-base">
        {data?.twitter ? (
          <a
            href={`https://twitter.com/${data.twitter}`}
            target="_blank"
            className="block relative"
          >
            {data.name}
          </a>
        ) : (
          <span className="block relative">{data.name}</span>
        )}
      </p>
      <p className="text-center text-sm text-gray-400 capitalize">
        {data.role}
      </p>
      <img
        className="w-28 h-28 md:w-36 md:h-36 rounded-full mt-5 object-cover"
        src={data.imgSrc}
        alt={`${data.name}'s photo`}
      />
    </div>
  );
};
