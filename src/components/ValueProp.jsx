import rightArrow from "../assets/icons/right-arrow.svg";
import Lottie from "react-lottie";

import gearIcon from "../assets/lottie/gear-icon.json";
import msgIcon from "../assets/lottie/msg-icon.json";
import transferIcon from "../assets/lottie/transfer-icon.json";

const gearIconOptions = {
  loop: true,
  autoplay: true,
  animationData: gearIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const msgIconOptions = {
  loop: true,
  autoplay: true,
  animationData: msgIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const transferIconOptions = {
  loop: true,
  autoplay: true,
  animationData: transferIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const valuePropData = [
  {
    title: "Easy to Develop On",
    desc: "We're obsessed with ensuring a great developer experience. Choose between the Socket APIs or the SDK, and take your app cross-chain in 20 mins.",
    url: "https://salilnaik.com",
    icon: gearIconOptions,
  },
  {
    title: "True Composibility",
    desc: "Connect different protocols on different layers together, compose with any protocol on any-chain, no limits.",
    url: "https://salilnaik.com",
    icon: msgIconOptions,
  },
  {
    title: "Efficient Value Transfer",
    desc: "Plug in to the biggest bridges and DEXs across chains and optimise for the parameters you care about, high outputs, low latency or trust minimisation",
    url: "https://salilnaik.com",
    icon: transferIconOptions,
  },
];

export const ValueProp = () => {
  return (
    <div className="bg-white pt-14 pb-10">
      <div className="socket-container mx-auto">
        <p className="text-center text-socket-theme text-xl font-extrabold mb-1">
          Meet Socket
        </p>
        <h2 className="heading-2 text-center">
          Designed by developers, for developers
        </h2>
        <p className="supporting-text text-center mt-2">
          We obsess over every small design detail so you have a seamless
          developer experience while taking your dapps cross chain
        </p>
        <div className="flex gap-8 mt-14 px-[4.625rem]">
          {valuePropData.map((item) => (
            <ValuePropCard
              title={item.title}
              desc={item.desc}
              url={item.url}
              key={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ValuePropCard = ({ title, desc, icon, url }) => {
  return (
    <div className="overlay-bg py-7 px-6 flex flex-col justify-between items-start flex-1">
      <div className="mb-[42px]">
        <div className="flex justify-start w-[62px] h-[62px] pointer-events-none mb-[39px]">
          <Lottie options={icon} />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-socket-gray-90 mb-2">
            {title}
          </h3>
          <p className="text-lg font-medium text-socket-gray-70 leading-[26.1px]">{desc}</p>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-socket-gray-90 font-extrabold text-lg flex items-center gap-2"
      >
        <span>Learn More</span>
        <img src={rightArrow} />
      </a>
    </div>
  );
};
