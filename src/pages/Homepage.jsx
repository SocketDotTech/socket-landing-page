import { Investors } from "../components/Investors";
import { Partners } from "../components/Partners";
import { ValueProp } from "../components/ValueProp";
import { Stats } from "../components/Stats";
import { Bungee } from "../components/Bungee";
import { PreFooter } from "../components/PreFooter";
import { Hero } from "../components/Hero";

export const Homepage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <ValueProp />
      <Stats />
      <Investors />
      <Bungee />
      <PreFooter />
    </div>
  );
};
