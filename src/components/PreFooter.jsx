import rightArrow from "../assets/icons/right-arrow.svg";

import gearIcon from "../assets/icons/gear-api.svg";
import rotateIcon from "../assets/icons/rotate.svg";
import switchIcon from "../assets/icons/switch.svg";

const productData = [
  {
    title: "Socket SDK",
    desc: "Send, track and claim arbitrary cross-chain messages using our frame-agnostic SDKs.",
    url: "https://salilnaik.com",
    icon: rotateIcon,
    urlLabel: "Read the Docs",
  },
  {
    title: "Socket API",
    desc: "Enable seamless cross-chain swaps in your app or protocol with our tested API.",
    url: "https://salilnaik.com",
    icon: gearIcon,
    urlLabel: "Read the Docs",
  },
  {
    title: "Socket Plugin",
    desc: "Build a customized bridge tailored to your needs with just a few lines of code.",
    url: "https://salilnaik.com",
    icon: switchIcon,
    urlLabel: "Read the Docs",
  },
];

export const PreFooter = () => {
  return (
    <div className="bg-socket-theme-light pt-[4.625rem] pb-14">
      <div className="socket-container mx-auto">
        <h2 className="heading-2 text-center">Start building today</h2>
        <p className="supportive-text text-center mt-2 mb-9">
          Get started building with Socket and take your apps cross-chain in as
          little as 20 mins
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9 lg:px-[5.6875rem]">
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
    <div className="bg-white pt-8 md:pt-[3.375rem] px-8 md:px-11 pb-7 flex flex-col justify-between flex-1 rounded-2xl gap-8 md:gap-10">
      <div>
        <div className="w-10 md:w-16 h-10 md:h-16 mb-4 md:mb-6">
          <img src={icon} alt="icon" className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-xl md:text-[2rem] font-extrabold text-socket-gray-90 mb-1.5 leading-[40px]">
            {title}
          </h3>
          <p className="md:text-lg font-medium text-socket-gray-70 md:leading-[26.1px]">
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
