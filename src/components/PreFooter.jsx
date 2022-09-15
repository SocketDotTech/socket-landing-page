import rightArrow from "../assets/icons/right-arrow.svg";
import Lottie from "react-lottie";

import gearIcon from "../assets/lottie/gear-icon.json";
import rotateIcon from "../assets/lottie/rotate-icon.json";
import switchIcon from "../assets/lottie/switch-icon.json";

const gearIconOptions = {
  loop: true,
  autoplay: true,
  animationData: gearIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const rotateIconOptions = {
  loop: true,
  autoplay: true,
  animationData: rotateIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const switchIconOptions = {
  loop: true,
  autoplay: true,
  animationData: switchIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const productData = [
  {
    title: "Socket SDK",
    desc: "Send, track and claim arbitrary cross-chain messages using our frame-agnostic SDKs.",
    url: "https://salilnaik.com",
    icon: rotateIconOptions,
    urlLabel: "Read Doc",
  },
  {
    title: "Socket API",
    desc: "Enable seamless cross-chain swaps in your app or protocol with our tested API.",
    url: "https://salilnaik.com",
    icon: gearIconOptions,
    urlLabel: "Request API key",
  },
  {
    title: "Socket Plugin",
    desc: "Build a customized bridge tailored to your needs with just a few lines of code.",
    url: "https://salilnaik.com",
    icon: switchIconOptions,
    urlLabel: "Read Doc",
  },
];

export const PreFooter = () => {
  return (
    <div className="bg-socket-theme-light pt-[4.625rem] pb-14">
      <div className="socket-container mx-auto">
        <h2 className="heading-2 text-center">Start building today</h2>
        <p className="supportive-text text-center mt-2 mb-9">
          Unmatched access to 12+ chains and more than 50 partners to integrate
          into your product.
        </p>
        <div className="flex gap-8 mt-9 px-[5.6875rem]">
          {productData.map((item) => (
            <ProductCard
              title={item.title}
              desc={item.desc}
              url={item.url}
              key={item.title}
              urlLabel={item.urlLabel}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ title, desc, icon, url, urlLabel }) => {
  return (
    <div className="bg-transparent pt-[3.375rem] px-11 pb-7 flex flex-col justify-between flex-1 border-2 border-[#E0C7F9] rounded-2xl gap-10">
      <div>
        <div className="w-16 h-16 mb-6">
          <Lottie options={icon} />
        </div>
        <div>
          <h3 className="text-[2rem] font-extrabold text-socket-gray-90 mb-1.5 leading-[40px]">
            {title}
          </h3>
          <p className="text-lg font-medium text-socket-gray-70 leading-[26.1px]">
            {desc}
          </p>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-socket-gray-90 font-extrabold text-lg flex items-center gap-2"
      >
        <span>{urlLabel}</span>
        <img src={rightArrow} />
      </a>
    </div>
  );
};
