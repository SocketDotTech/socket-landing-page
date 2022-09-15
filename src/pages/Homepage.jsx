import patternLight from "../assets/pattern-light.svg";
import routeImg from "../assets/hero-illustration.svg";
import bungeeLogo from "../assets/bungee_logo_white.svg";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Team } from "../components/Team";
import { Investors } from "../components/Investors";
import { Footer } from "../components/Footer";
import { Partners } from "../components/Partners";
import { ValueProp } from "../components/ValueProp";
import { Stats } from "../components/Stats";
import { SocialSection } from "../components/SocialSection";
import { Bungee } from "../components/Bungee";
import { PreFooter } from "../components/PreFooter";
const btnStyle =
  "bg-oc-theme-primary text-white hover:bg-oc-theme-primary-dark text-sm font-medium px-3 h-14 flex items-center md:px-4 mr-4 rounded transition-all";

export const Homepage = () => {
  return (
    <div>
      {/* Hero section  */}
      <div
        style={{ height: "700px", backgroundImage: `url(${patternLight})` }}
        className="relative bg-repeat bg-[length:240px_240px]"
      >
        {/* dark overlay */}
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-oc-dark to-transparent">
          <div
            className="absolute bottom-0 left-0 h-full w-full bg-no-repeat bg-bottom 2xl:bg-bottom-right bg-cover 2xl:bg-auto"
            style={{ backgroundImage: `url(${routeImg})` }}
          ></div>
        </div>
        {/* circle */}
        {/* <div style={{width: '540px', height: '540px', right: '-280px', bottom: '-130px'}} className="absolute rounded-full bg-oc-theme-primary-dark flex justify-center items-center">
                    <div className="bg-white rounded-full" style={{width: '330px', height: '330px'}}></div>
                </div> */}
        {/* <img src={cPattern} className="absolute bottom-0 right-0 transform" style={{transform: 'rotateZ(210deg)'}} /> */}
        {/* <div className="h-96 w-96 rounded-full absolute right-3 bg-red-400" style={{borderWidth: '60px'}}></div> */}
        {/* content */}
        <div className="flex flex-col justify-center w-full h-full relative container mx-auto px-5">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-xl">
            Powering Truly Multi Chain Apps
          </h1>
          <div className="flex mt-10">
            <a
              href="https://docs.socket.tech"
              target="_blank"
              className={`${btnStyle} bg-gray-100 text-gray-800 hover:text-white`}
            >
              Get started
            </a>
            <a
              href="https://app.bungee.exchange/"
              className={`${btnStyle}  text-white flex items-center hover:shadow-inner`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it on <img src={bungeeLogo} className="h-8 ml-2 mt-3.5" />
            </a>
          </div>
        </div>
      </div>

      <Partners />
      <ValueProp />
      <Stats />
      <Investors />
      <SocialSection />
      <Bungee />
      <PreFooter />
      <Footer />
    </div>
  );
};
