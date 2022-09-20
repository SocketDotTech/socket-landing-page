import { Button } from "./Button";
import bungeeScreenshot from "../assets/bungee-screenshot.png";

export const Bungee = () => {
  return (
    <div className="bg-white pt-[3.75rem] pb-12">
      <div className="socket-container mx-auto flex flex-col items-center">
        <h2 className="heading-2 text-center">How Bungee Uses Socket</h2>
        <p className="supportive-text text-center my-2">
          Bungee moves assets between chains in the most efficient way by
          plugging into the Socket Liquidity Meta-Layer
        </p>
        <Button bgColor="bg-socket-gray-100" external url="https://bungee.exchange/" type="link">Try Bungee</Button>
        <img src={bungeeScreenshot} alt="screenshot of the bungee app" className="mt-6 w-full lg:w-auto max-w-[988px] rounded md:rounded-xl"/>
      </div>
    </div>
  );
};
