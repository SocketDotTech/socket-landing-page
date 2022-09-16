import gearIcon from "../assets/icons/gear-api.svg";
import msgIcon from "../assets/icons/msg.svg";
import transferIcon from "../assets/icons/transfer-arrow.svg";

const valuePropData = [
  {
    title: "Easy to Develop On",
    desc: "We're obsessed with ensuring a great developer experience. Choose between the Socket APIs or the SDK, and take your app cross-chain in 20 mins.",
    icon: gearIcon,
  },
  {
    title: "True Composibility",
    desc: "Connect different protocols on different layers together, compose with any protocol on any-chain, no limits.",
    icon: msgIcon,
  },
  {
    title: "Efficient Value Transfer",
    desc: "Plug in to the biggest bridges and DEXs across chains and optimise for the parameters you care about, high outputs, low latency or trust minimisation",
    icon: transferIcon,
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
      <div>
        <div className="flex justify-start w-[62px] h-[62px] pointer-events-none mb-[39px]">
          <img src={icon} alt="icon" className="w-full h-full"/>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-socket-gray-90 mb-2">
            {title}
          </h3>
          <p className="text-lg font-medium text-socket-gray-70 leading-[26.1px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
