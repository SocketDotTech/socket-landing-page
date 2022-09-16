import { Button } from "../components/Button";

// Team
import vc from "../assets/team/vc.jpeg";
import rk from "../assets/team/rk.jpg";
import arth from "../assets/team/arth.jpg";
import varun from "../assets/team/varun.jpg";
import vamsi from "../assets/team/vamsi.jpg";
import aniket from "../assets/team/aniket.jpg";
import salil from "../assets/team/salil.png";
import ananya from "../assets/team/ananya.jpg";
import shrey from "../assets/team/shrey.jpg";
import ameesha from "../assets/team/ameesha.jpeg";
import dpb from "../assets/team/dpb.jpg";
import absolute from "../assets/team/absolute.png";
import sriram from "../assets/team/sriram.jpg";
import apurva from "../assets/team/apurva.png";
import vishnu from "../assets/team/vishnu.jpg";

const teamData = [
  {
    name: "Vaibhav Chellani",
    designation: "Co-founder",
    twitter: "vaibhavchellani",
    imgUrl: vc,
  },
  {
    name: "Rishabh Khurana",
    designation: "Co-founder",
    twitter: "khuranarishabh0",
    imgUrl: rk,
  },
  {
    name: "Arth Patel",
    designation: "Head of Engineering",
    twitter: "arthcp",
    imgUrl: arth,
  },
  {
    name: "Varun",
    designation: "Product Manager",
    twitter: null,
    imgUrl: varun,
  },
  {
    name: "Vamsi Reddy",
    designation: "Senior Blockchain Developer",
    twitter: "reddyismav",
    imgUrl: vamsi,
  },
  {
    name: "Aniket Sharma",
    designation: "Blockchain Developer",
    twitter: "aniket965as",
    imgUrl: aniket,
  },
  {
    name: "Salil Naik",
    designation: "Senior Frontend Developer",
    twitter: "0xSalilNaik",
    imgUrl: salil,
  },
  {
    name: "Ameesha Agrawal",
    designation: "Blockchain Engineer",
    imgUrl: ameesha,
  },
  {
    name: "Vishnu Prasad",
    designation: "Dev Ops",
    imgUrl: vishnu,
  },
  {
    name: "Ananya Agrawal",
    designation: "Blockchain Engineer",
    imgUrl: ananya,
  },
  {
    name: "Shrey Keny",
    designation: "Engineer, Dev-Rel, Documaster",
    twitter: "ShreyKeny",
    imgUrl: shrey,
  },
  {
    name: "Sriram Vasudevan",
    designation: "Marketing & Community",
    twitter: "sriramvas",
    imgUrl: sriram,
  },
  {
    name: "Devain Pal Bansal",
    designation: "Researcher / Information Architect",
    twitter: "dpbmaverick98",
    imgUrl: dpb,
  },
  {
    name: "Apurva Mishra",
    designation: "kya hai?",
    imgUrl: apurva,
  },
  {
    name: "Absolute",
    designation: "Community",
    twitter: "AbsoluteUknit",
    imgUrl: absolute,
  },
];

export const Teampage = () => {
  return (
    <div>
      <div className="bg-socket-theme pt-[8.75rem] pb-[6.25rem]">
        <div className="socket-container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-white text-[3.5rem] font-bold text-center max-w-[535px] mx-auto leading-[63.84px]">
              Hi. We're Socket.
            </h1>
            <p className="text-white font-medium text-lg max-w-[644px] text-center">
              We're building a product ecosystem that will help humanity create
              advanced virtual economies through the power of blockchain
              technology.
            </p>
            <div className="flex gap-3">
              <Button
                type="link"
                url="https://docs.socket.tech/"
                external
                bgColor="bg-socket-gray-100"
              >
                Join Us at Socket
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-[3.125rem] pb-[6.25rem]">
        <div className="socket-container mx-auto">
          <h2 className="heading-2 text-center">Meet the Team</h2>
          <p className="supportive-text text-center mt-1">
            A diverse distributed team of super coders and cross-chain
            ethusiasts
          </p>

          <div className="mt-8 flex flex-wrap">
            {teamData.map((mate) => (
              <TeamMate
                name={mate.name}
                designation={mate.designation}
                imgUrl={mate.imgUrl}
                key={mate.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamMate = (props) => {
  const { name, designation, imgUrl } = props;
  return (
    <div className="w-1/4 p-4">
      <div className="w-full pb-[110%] mb-[15px] relative">
        <img
          src={imgUrl}
          alt={`${name}'s picture`}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
      <h3 className="text-socket-gray-90 text-[22.44px] leading-[32.53px] font-extrabold">
        {name}
      </h3>
      <p className="text-socket-gray-70 text-[16.8px] leading-[24px] font-medium">
        {designation}
      </p>
    </div>
  );
};
