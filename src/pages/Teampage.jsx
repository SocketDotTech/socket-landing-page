import { Button } from "../components/Button";

// Team
import vc from "../assets/team/vc.jpg";
import rk from "../assets/team/rk.jpg";
import arth from "../assets/team/arth.jpg";
import varun from "../assets/team/varun.jpg";
import vamsi from "../assets/team/vamsi.jpg";
import aniket from "../assets/team/aniket.jpg";
import salil from "../assets/team/salil.png";
import shrey from "../assets/team/shrey.jpg";
import ameesha from "../assets/team/ameesha.jpg";
import dpb from "../assets/team/dpb.jpg";
import sriram from "../assets/team/sriram.jpg";
import apurva from "../assets/team/apurva.png";
import vishnu from "../assets/team/vishnu.jpg";
import murphy from "../assets/team/murphy.jpg";
import ankita from "../assets/team/ankita.jpg";
import kanth from "../assets/team/kanth.jpg";

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
    name: "Varun Bhalla",
    designation: "Product Manager",
    twitter: null,
    imgUrl: varun,
  },
  {
    name: "Murphy",
    designation: "Head of Design",
    twitter: null,
    imgUrl: murphy,
  },
  {
    name: "Sriram Vasudevan",
    designation: "Head of Strategy & Marketing",
    twitter: "sriramvas",
    imgUrl: sriram,
  },
  {
    name: "Ankita Kumari",
    designation: "Head of People Operation",
    imgUrl: ankita,
  },
  {
    name: "Vamsi Reddy",
    designation: "Senior Blockchain Engineer",
    twitter: "reddyismav",
    imgUrl: vamsi,
  },
  {
    name: "Aniket Sharma",
    designation: "Blockchain Engineer",
    twitter: "aniket965as",
    imgUrl: aniket,
  },
  {
    name: "Salil Naik",
    designation: "Senior Frontend Engineer",
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
    designation: "Senior Backend Engineer",
    imgUrl: vishnu,
  },
  {
    name: "Lakshmi Kanth",
    designation: "Backend Developer",
    imgUrl: kanth,
  },
  {
    name: "Shrey Keny",
    designation: "Engineer, Dev-Rel, Documaster",
    twitter: "ShreyKeny",
    imgUrl: shrey,
  },
  {
    name: "Devain Pal Bansal",
    designation: "Researcher / Information Architect",
    twitter: "dpbmaverick98",
    imgUrl: dpb,
  },
  {
    name: "Apurva Mishra",
    designation: "Marketing & Operations",
    imgUrl: apurva,
    twitter: "apmishra0398",
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
              A diverse distributed team of super coders and cross-chain
              enthusiasts
            </p>
            <div className="flex gap-3">
              <Button
                type="link"
                url="https://angel.co/company/socket-tech"
                external
                bgColor="bg-socket-gray-100"
              >
                Join Us at Socket
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-[3.125rem] pb-[3.125rem] md:pb-[6.25rem]">
        <div className="socket-container mx-auto">
          <h2 className="heading-2 text-center">Meet the Team</h2>

          <div className="mt-8 flex flex-wrap">
            {teamData.map((mate) => (
              <TeamMate
                name={mate.name}
                designation={mate.designation}
                imgUrl={mate.imgUrl}
                twitterUrl={mate.twitter}
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
  const { name, designation, imgUrl, twitterUrl } = props;
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/5 p-4">
      <a
        href={twitterUrl ? `https://twitter.com/${twitterUrl}` : null}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full pb-[110%] mb-[15px] relative hover:grayscale-0 grayscale">
          <img
            src={imgUrl}
            alt={`${name}'s picture`}
            className="w-full block h-full object-cover absolute top-0 left-0"
          />
        </div>
        <h3 className="text-socket-gray-90 text-lg md:text-[22.44px] md:leading-[32.53px] font-extrabold">
          {name}
        </h3>
        <p className="text-socket-gray-70 md:text-[16.8px] md:leading-[24px] font-medium">
          {designation}
        </p>
      </a>
    </div>
  );
};
