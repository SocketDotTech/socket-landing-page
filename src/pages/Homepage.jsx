import patternLight from "../assets/pattern-light.svg";
import routeImg from "../assets/hero-illustration.svg";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
const btnStyle =
  "bg-oc-theme-primary text-white hover:bg-oc-theme-primary-dark text-sm font-medium p-3 md:p-4 mr-4 rounded transition-all";

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
            <a href="https://docs.socket.tech" target="_blank" className={btnStyle}>
              Get started
            </a>
            <a
              href="https://app.fund.movr.network/"
              className={`${btnStyle} bg-gray-100 text-gray-800 hover:text-white`}
              target="_blank"
              rel="noopener noreferrer"
            >
             Try it on <b>Fund Movr</b> 
            </a>
          </div>
        </div>
      </div>

      {/* Funding section */}
      <div className="bg-gradient-to-r from-oc-theme-primary to-oc-theme-primary-dark py-10 md:py-20">
        <div className="container mx-auto relative px-5">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            Powering interoperability for everyone!
          </h2>
          <p className="text-gray-300 mt-4 md:mt-7 max-w-xl mx-auto text-center text-sm md:text-base">
            Top dapps in the ecosystem are already plugged in
          </p>
          {/* <img src={socketIconWhite} className="w-20" /> */}
        </div>

        <div className="container pt-16 md:pt-20 mx-auto">
          <PartnersCarousel />
        </div>
      </div>

      <Team />

      {/* fund movr ad */}
      <div className="bg-gradient-to-b from-oc-theme-primary to-oc-theme-dark">
        <div className="container mx-auto py-10 md:py-20 px-5">
          <div className="md:flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                <span className="text-gray-300">Try out</span> FundMovr
              </h2>
              <p className="text-gray-200 mt-4 md:mt-7 max-w-2xl text-sm md:text-base">
                FundMovr moves assets between chains in the most efficient by
                plugging into the Socket Liquidity Meta-Layer. We allow users to
                swap and transfer funds across any-chain seamlessly and via the
                most efficient route.
              </p>
            </div>
            <div className="flex mt-4 md:mt-0">
              <a
                href="https://app.fund.movr.network/"
                className={`${btnStyle} bg-gray-200 text-gray-800 hover:bg-white`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to app
              </a>
              {/* <a href="docs" className={`${btnStyle} bg-transparent border border-white hover:bg-white hover:text-gray-800`}>API Docs</a> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
