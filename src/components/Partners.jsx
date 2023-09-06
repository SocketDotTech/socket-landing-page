import { useState } from "react";
import thunder from "../assets/icons/thunder.svg";

// gray icons
// import perpetualIcon from "../assets/partners/gray/perpetual.svg";
// import synthetixIcon from "../assets/partners/gray/Synthetix.svg";
// import premiaIcon from "../assets/partners/gray/Premia.svg";
// import dHedgeIcon from "../assets/partners/gray/dHedge.svg";
// import rubiconIcon from "../assets/partners/gray/Rubicon.svg";
// import polynomialIcon from "../assets/partners/gray/Polynomial.svg";
// import brahmaIcon from "../assets/partners/gray/brahma.svg";
// import TetuIcon from "../assets/partners/gray/Tetu.svg";
// import OnDefyIcon from "../assets/partners/gray/OnDefy.svg";
// import atlantisIcon from "../assets/partners/gray/atlantis.svg";
// import sequenceIcon from "../assets/partners/gray/Sequence.svg";
// import steakIcon from "../assets/partners/gray/steak.svg";
// import ZapperIcon from "../assets/partners/gray/Zapper.svg";
// import ZerionIcon from "../assets/partners/gray/Zerion.svg";
// import OneKeyIcon from "../assets/partners/gray/OneKey.svg";
// import imTokenIcon from "../assets/partners/gray/imToken.svg";
// import choiceIcon from "../assets/partners/gray/choise.svg";
// import viaIcon from "../assets/partners/gray/via.svg";
// import EtherspotIcon from "../assets/partners/gray/etherspot.svg";
// import PlasmaIcon from "../assets/partners/gray/plasma.svg";
// import orangeIcon from "../assets/partners/gray/orange.svg";
// import ambireIcon from "../assets/partners/gray/ambire.svg";

// colored icons
import perpetualIconFilled from "../assets/partners/colored/perpetual.svg";
import synthetixIconFilled from "../assets/partners/colored/Synthetix.svg";
import premiaIconFilled from "../assets/partners/colored/Premia.svg";
import dHedgeIconFilled from "../assets/partners/colored/dHedge.svg";
import rubiconIconFilled from "../assets/partners/colored/Rubicon.svg";
import polynomialIconFilled from "../assets/partners/colored/Polynomial.svg";
import brahmaIconFilled from "../assets/partners/colored/brahma.svg";
import TetuIconFilled from "../assets/partners/colored/Tetu.svg";
import OnDefyIconFilled from "../assets/partners/colored/OnDefy.svg";
import atlantisIconFilled from "../assets/partners/colored/atlantis.svg";
import sequenceIconFilled from "../assets/partners/colored/Sequence.svg";
import steakIconFilled from "../assets/partners/colored/steak.svg";
import ZapperIconFilled from "../assets/partners/colored/Zapper.svg";
import ZerionIconFilled from "../assets/partners/colored/Zerion.svg";
import OneKeyIconFilled from "../assets/partners/colored/OneKey.svg";
import imTokenIconFilled from "../assets/partners/colored/imToken.svg";
import choiceIconFilled from "../assets/partners/colored/choise.svg";
import viaIconFilled from "../assets/partners/colored/via.svg";
import EtherspotIconFilled from "../assets/partners/colored/etherspot.svg";
import PlasmaIconFilled from "../assets/partners/colored/plasma.svg";
import orangeIconFilled from "../assets/partners/colored/orange.svg";
import ambireIconFilled from "../assets/partners/colored/ambire.svg";
import metamaskIconFilled from "../assets/partners/colored/metamask.svg";
import coinbaseIconFilled from "../assets/partners/colored/coinbase.svg";
import rainbowIconFilled from "../assets/partners/colored/rainbow.svg";
import aevoIconFilled from "../assets/partners/colored/aevo.svg";
import slingshotIconFilled from "../assets/partners/colored/slingshot.svg";
import xdefiIconFilled from "../assets/partners/colored/xdefi.svg";
import instadappIconFilled from "../assets/partners/colored/instadapp.svg";
import gmxIconFilled from "../assets/partners/colored/gmx.svg";
import lyraIconFilled from "../assets/partners/colored/lyra.svg";
import kwentaIconFilled from "../assets/partners/colored/kwenta.svg";
import bungeeIconFilled from "../assets/partners/colored/bungee.svg";
import riskHarborIconFilled from "../assets/partners/colored/riskharbor.svg";
import superformIconFilled from "../assets/partners/colored/superform.svg";
import alignsideIconFilled from "../assets/partners/colored/alongside.svg";
import jonesDaoIconFilled from "../assets/partners/colored/jones.svg";
import goal3IconFilled from "../assets/partners/colored/goal3.svg";
import omniIconFilled from "../assets/partners/colored/omni.svg";
import zealIconFilled from "../assets/partners/colored/zeal.svg";
import decentIconFilled from "../assets/partners/colored/decent.svg";
import suberraIconFilled from "../assets/partners/colored/suberra.svg";
import dxDaoIconFilled from "../assets/partners/colored/dxdao.svg";
import levelIconFilled from "../assets/partners/colored/level.svg";
import thalesIconFilled from "../assets/partners/colored/thales.svg";

const partners = [
  {
    name: "Coinbase Wallet",
    icon: coinbaseIconFilled,
    iconFilled: coinbaseIconFilled,
  },
  {
    name: "Metamask",
    icon: metamaskIconFilled,
    iconFilled: metamaskIconFilled,
  },
  {
    name: "Rainbow",
    icon: rainbowIconFilled,
    iconFilled: rainbowIconFilled,
  },
  {
    name: "Zapper",
    icon: ZapperIconFilled,
    iconFilled: ZapperIconFilled,
  },
  {
    name: "Zerion",
    icon: ZerionIconFilled,
    iconFilled: ZerionIconFilled,
  },
  {
    name: "Aevo",
    icon: aevoIconFilled,
    iconFilled: aevoIconFilled,
  },
  {
    name: "OneKey",
    icon: OneKeyIconFilled,
    iconFilled: OneKeyIconFilled,
  },
  {
    name: "Slingshot",
    icon: slingshotIconFilled,
    iconFilled: slingshotIconFilled,
  },
  {
    name: "XDEFI Wallet",
    icon: xdefiIconFilled,
    iconFilled: xdefiIconFilled,
  },
  {
    name: "Instadapp",
    icon: instadappIconFilled,
    iconFilled: instadappIconFilled,
  },
  {
    name: "GMX",
    icon: gmxIconFilled,
    iconFilled: gmxIconFilled,
  },
  {
    name: "Synthetix",
    icon: synthetixIconFilled,
    iconFilled: synthetixIconFilled,
  },
  {
    name: "Lyra",
    icon: lyraIconFilled,
    iconFilled: lyraIconFilled,
  },
  {
    name: "Kwenta",
    icon: kwentaIconFilled,
    iconFilled: kwentaIconFilled,
  },
  {
    name: "Perpetual Protocol",
    icon: perpetualIconFilled,
    iconFilled: perpetualIconFilled,
  },
  {
    name: "Bungee",
    icon: bungeeIconFilled,
    iconFilled: bungeeIconFilled,
  },
  {
    name: "Risk Harbor",
    icon: riskHarborIconFilled,
    iconFilled: riskHarborIconFilled,
  },
  {
    name: "Superform",
    icon: superformIconFilled,
    iconFilled: superformIconFilled,
  },
  {
    name: "Polynomial",
    icon: polynomialIconFilled,
    iconFilled: polynomialIconFilled,
  },
  {
    name: "dHedge",
    icon: dHedgeIconFilled,
    iconFilled: dHedgeIconFilled,
  },
  {
    name: "Level Finance",
    icon: levelIconFilled,
    iconFilled: levelIconFilled,
  },
  {
    name: "Premia",
    icon: premiaIconFilled,
    iconFilled: premiaIconFilled,
  },
  {
    name: "Alongside",
    icon: alignsideIconFilled,
    iconFilled: alignsideIconFilled,
  },
  {
    name: "JonesDAO",
    icon: jonesDaoIconFilled,
    iconFilled: jonesDaoIconFilled,
  },
  {
    name: "Goal3",
    icon: goal3IconFilled,
    iconFilled: goal3IconFilled,
  },
  {
    name: "Sequence",
    icon: sequenceIconFilled,
    iconFilled: sequenceIconFilled,
  },
  {
    name: "Choice",
    icon: choiceIconFilled,
    iconFilled: choiceIconFilled,
  },
  {
    name: "Ambire Wallet",
    icon: ambireIconFilled,
    iconFilled: ambireIconFilled,
  },
  {
    name: "Omni",
    icon: omniIconFilled,
    iconFilled: omniIconFilled,
  },
  {
    name: "Zeal",
    icon: zealIconFilled,
    iconFilled: zealIconFilled,
  },
  {
    name: "Decent",
    icon: decentIconFilled,
    iconFilled: decentIconFilled,
  },
  {
    name: "Suberra",
    icon: suberraIconFilled,
    iconFilled: suberraIconFilled,
  },
  {
    name: "DxDAO",
    icon: dxDaoIconFilled,
    iconFilled: dxDaoIconFilled,
  },
  {
    name: "Rubicon",
    icon: rubiconIconFilled,
    iconFilled: rubiconIconFilled,
  },
  {
    name: "Brahma.fi",
    icon: brahmaIconFilled,
    iconFilled: brahmaIconFilled,
  },
  {
    name: "Plasma Finance",
    icon: PlasmaIconFilled,
    iconFilled: PlasmaIconFilled,
  },
  {
    name: "Thales",
    icon: thalesIconFilled,
    iconFilled: thalesIconFilled,
  },
  {
    name: "Orange Wallet",
    icon: orangeIconFilled,
    iconFilled: orangeIconFilled,
  },
  {
    name: "Etherspot",
    icon: EtherspotIconFilled,
    iconFilled: EtherspotIconFilled,
  },
  // not included in the design
  {
    name: "Tetu",
    icon: TetuIconFilled,
    iconFilled: TetuIconFilled,
  },
  {
    name: "OnDefy",
    icon: OnDefyIconFilled,
    iconFilled: OnDefyIconFilled,
  },
  {
    name: "Atlantis Loan",
    icon: atlantisIconFilled,
    iconFilled: atlantisIconFilled,
  },
  {
    name: "Steakwallet",
    icon: steakIconFilled,
    iconFilled: steakIconFilled,
  },
  {
    name: "imToken",
    icon: imTokenIconFilled,
    iconFilled: imTokenIconFilled,
  },
  {
    name: "Via Exchange",
    icon: viaIconFilled,
    iconFilled: viaIconFilled,
  },
];

export const Partners = () => {
  return (
    <div className="bg-white pt-16 pb-8">
      <div className="socket-container mx-auto">
        <div className="rounded-[20px] md:rounded-[32px] overlay-bg mx-auto py-7 px-3 md:pt-14 md:pb-8 md:px-11 relative">
          <h2 className="heading-2 text-center">
            Taking the World Cross Chain
          </h2>
          <p className="supporting-text text-center mt-2">
            Socket powers interoperability for the biggest wallets and
            decentralised protocols in the space
          </p>
          <div className="flex flex-wrap mt-10 justify-center">
            {partners.map((item) => (
              <IconFilledTab
                name={item.name}
                icon={item.iconFilled}
                key={item.name}
                // iconFilled={item.iconFilled}
              />
            ))}

            <div className="m-2 md:m-[6.5px] py-1 md:py-1.5 px-1 md:px-[1.125rem] bg-white flex gap-1.5 md:gap-3 items-center">
              <p className="text-socket-gray-80 font-extrabold text-sm md:text-base">
                + more
              </p>
            </div>
          </div>

          <img
            src={thunder}
            className="hidden lg:block absolute top-9 right-20"
          />
        </div>
      </div>
    </div>
  );
};

const IconFilledTab = ({ name, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="m-2 md:m-[6.5px] py-1 md:py-1.5 px-1 md:px-[1.125rem] bg-white flex gap-1.5 md:gap-3 items-center"
      // onMouseOver={() => setHover(true)}
      // onMouseOut={() => setHover(false)}
    >
      <div className="border border-black/[0.02] rounded-[6.5px] h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] flex items-center justify-center">
        <img src={icon} />
      </div>
      <p className="text-socket-gray-80 font-extrabold text-sm md:text-base">
        {name}
      </p>
    </div>
  );
};
