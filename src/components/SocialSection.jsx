import Lottie from "react-lottie";
import { Button } from "./Button";
import asset from "../assets/lottie/crypto-page.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: asset,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const SocialSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="socket-container mx-auto flex flex-col items-center">
        <p className="text-center text-socket-theme text-xl font-extrabold mb-1">
          Core Layer for Next Gen Apps
        </p>
        <h2 className="heading-2 text-center mb-2">
          Be a part of new global world
        </h2>
        <div className="max-w-[1158px]">
          <Lottie options={defaultOptions} />
        </div>
        <Button>Join us on Discord</Button>
      </div>
    </div>
  );
};
