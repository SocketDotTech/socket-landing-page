import Lottie from "react-lottie";
import { Button } from "./Button";
import animationData from "../assets/lottie/landing-page.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  // rendererSettings: {
  //   preserveAspectRatio: "xMidYMid slice",
  // },
};
export const Hero = () => {
  return (
    <div className="bg-socket-theme pt-[8.75rem] pb-[6.25rem] flex-1">
      <div className="socket-container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-white text-[3.5rem] font-bold text-center max-w-[535px] mx-auto leading-[63.84px]">
            Powering Truly Multi-Chain Apps
          </h1>
          <p className="text-white font-medium text-lg max-w-[644px] text-center">
            Socket is a complete interoperability stack which allows asset &amp;
            data transfers across chains, enabling developers to build truly
            cross chain apps
          </p>
          <div className="flex gap-3">
            <Button
              type="link"
              url="https://docs.socket.tech/"
              external
              bgColor="bg-socket-gray-100"
            >
              Read Documentation
            </Button>
            <Button
              type="link"
              url="https://bungee.exchange/"
              external
              bgColor="bg-white"
              textColor="text-socket-gray-100"
            >
              Try it on Bungee
            </Button>
          </div>
        </div>

        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};
