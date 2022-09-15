import { Button } from "./Button";
import animatedAsset from "../assets/animated-asset.png";

export const SocialSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center text-socket-theme text-xl font-extrabold mb-1">
          Core Layer for Next Gen Apps
        </p>
        <h2 className="heading-2 text-center mb-2">
          Be a part of new global world
        </h2>
        <Button>Join us on Discord</Button>
        <img src={animatedAsset} alt="socket powering dApps" className="mt-[3.75rem]" />
      </div>
    </div>
  );
};
