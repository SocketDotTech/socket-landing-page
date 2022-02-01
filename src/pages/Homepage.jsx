import patternLight from "../assets/pattern-light.svg";
import socketIconWhite from "../assets/socket-icon-white.png";
import routeImg from "../assets/route.svg";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
const btnStyle =
  "bg-oc-theme-primary text-white hover:bg-oc-theme-primary-dark text-sm font-medium p-4 mr-4 rounded transition-all";

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
            className="absolute bottom-0 left-0 h-full w-full bg-no-repeat bg-bottom"
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
        <div className="flex flex-col justify-center w-full h-full relative container mx-auto">
          <h1 className="text-white text-6xl font-bold max-w-xl">
            Making cross chain UX seamless
          </h1>
          <div className="flex mt-10">
            <a href="discord.com" className={btnStyle}>
              Get started
            </a>
            <a
              href="discord.com"
              className={`${btnStyle} bg-gray-100 text-gray-800 hover:text-white`}
            >
              Join the community
            </a>
          </div>
        </div>
      </div>

      {/* Funding section */}
      <div
        className="bg-gradient-to-r from-oc-theme-primary to-oc-theme-primary-dark"
        style={{ padding: "100px 0" }}
      >
        <div className="container mx-auto relative flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-white text-4xl font-bold">
              We work with the best!
            </h2>
            <p className="text-gray-300 mt-7 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              officiis vel culpa, facere, consectetur, eum pariatur similique
              quod adipisci perferendis minima placeat! Accusantium perspiciatis
              qui quibusdam amet unde inventore porro.
            </p>
          </div>
          <img src={socketIconWhite} className="w-40" />
        </div>

        <div className="container pt-20 mx-auto">
          <PartnersCarousel />
        </div>
      </div>

      <Team />

      {/* fund movr ad */}
      <div className="bg-gradient-to-b from-oc-theme-primary to-oc-theme-dark">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-4xl font-bold">
                <span className="text-gray-300">Try out</span> FundMovr
              </h2>
              <p className="text-gray-200 mt-7 max-w-2xl">
                <b>Fund Movr moves assets between L2s in the most efficient way</b>. We
                aggregate all bridges under one roof and provide peer-to-peer
                settlement on top of it. Think cow-swap for cross-L2 asset
                movements
              </p>
            </div>
            <div className="flex">
                <a href="docs" className={`${btnStyle} bg-gray-200 text-gray-800 hover:bg-white`}>Go to app</a>
                <a href="docs" className={`${btnStyle} bg-transparent border border-white hover:bg-white hover:text-gray-800`}>API Docs</a>
            </div>
          </div>
        </div>
      </div>

     <Footer />
    </div>
  );
};
