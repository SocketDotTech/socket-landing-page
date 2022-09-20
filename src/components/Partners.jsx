import { useState } from "react";
import thunder from "../assets/icons/thunder.svg";

// gray icons
import perpetualIcon from "../assets/partners/gray/perpetual.svg";
import synthetixIcon from "../assets/partners/gray/Synthetix.svg";
import premiaIcon from "../assets/partners/gray/Premia.svg";
import dHedgeIcon from "../assets/partners/gray/dHedge.svg";
import rubiconIcon from "../assets/partners/gray/Rubicon.svg";
import polynomialIcon from "../assets/partners/gray/Polynomial.svg";
import brahmaIcon from "../assets/partners/gray/brahma.svg";
import TetuIcon from "../assets/partners/gray/Tetu.svg";
import OnDefyIcon from "../assets/partners/gray/OnDefy.svg";
import atlantisIcon from "../assets/partners/gray/atlantis.svg";
import sequenceIcon from "../assets/partners/gray/Sequence.svg";
import steakIcon from "../assets/partners/gray/steak.svg";
import ZapperIcon from "../assets/partners/gray/Zapper.svg";
import ZerionIcon from "../assets/partners/gray/Zerion.svg";
import OneKeyIcon from "../assets/partners/gray/OneKey.svg";
import imTokenIcon from "../assets/partners/gray/imToken.svg";
import choiceIcon from "../assets/partners/gray/choise.svg";
import viaIcon from "../assets/partners/gray/via.svg";
import EtherspotIcon from "../assets/partners/gray/etherspot.svg";
import PlasmaIcon from "../assets/partners/gray/plasma.svg";
import orangeIcon from "../assets/partners/gray/orange.svg";
import ambireIcon from "../assets/partners/gray/ambire.svg";

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

const partners = [
  {
    name: "Zapper",
    icon: ZapperIcon,
    iconFilled: ZapperIconFilled,
  },
  {
    name: "Zerion",
    icon: ZerionIcon,
    iconFilled: ZerionIconFilled,
  },
  {
    name: "Synthetix",
    icon: synthetixIcon,
    iconFilled: synthetixIconFilled,
  },
  // lyra here
  {
    name: "Perpetual Protocol",
    icon: perpetualIcon,
    iconFilled: perpetualIconFilled,
  },
  {
    name: "OneKey",
    icon: OneKeyIcon,
    iconFilled: OneKeyIconFilled,
  },
  {
    name: "Sequence",
    icon: sequenceIcon,
    iconFilled: sequenceIconFilled,
  },
  {
    name: "Premia",
    icon: premiaIcon,
    iconFilled: premiaIconFilled,
  },
  {
    name: "dHedge",
    icon: dHedgeIcon,
    iconFilled: dHedgeIconFilled,
  },
  {
    name: "Rubicon",
    icon: rubiconIcon,
    iconFilled: rubiconIconFilled,
  },
  {
    name: "Polynomial",
    icon: polynomialIcon,
    iconFilled: polynomialIconFilled,
  },
  {
    name: "Brahma.fi",
    icon: brahmaIcon,
    iconFilled: brahmaIconFilled,
  },
  {
    name: "Tetu",
    icon: TetuIcon,
    iconFilled: TetuIconFilled,
  },
  {
    name: "OnDefy",
    icon: OnDefyIcon,
    iconFilled: OnDefyIconFilled,
  },
  {
    name: "Atlantis Loan",
    icon: atlantisIcon,
    iconFilled: atlantisIconFilled,
  },
  {
    name: "Steakwallet",
    icon: steakIcon,
    iconFilled: steakIconFilled,
  },
  {
    name: "imToken",
    icon: imTokenIcon,
    iconFilled: imTokenIconFilled,
  },
  {
    name: "Choice",
    icon: choiceIcon,
    iconFilled: choiceIconFilled,
  },
  {
    name: "Via Exchange",
    icon: viaIcon,
    iconFilled: viaIconFilled,
  },
  {
    name: "Etherspot",
    icon: EtherspotIcon,
    iconFilled: EtherspotIconFilled,
  },
  {
    name: "Plasma Finance",
    icon: PlasmaIcon,
    iconFilled: PlasmaIconFilled,
  },
  {
    name: "Orange Wallet",
    icon: orangeIcon,
    iconFilled: orangeIconFilled,
  },
  {
    name: "Ambire Wallet",
    icon: ambireIcon,
    iconFilled: ambireIconFilled,
  },
];

export const Partners = () => {
  return (
    <div className="bg-white pt-16 pb-8">
      <div className="socket-container mx-auto">
        <div className="rounded-[20px] md:rounded-[32px] overlay-bg mx-auto py-7 px-3 md:pt-14 md:pb-8 md:px-11 relative">
          <h2 className="heading-2 text-center">Powering the Best</h2>
          <p className="supporting-text text-center mt-2">
            More than 30 apps are getting plugged in to Socket as you read this
          </p>
          <div className="flex flex-wrap mt-10 justify-center">
            {partners.map((item) => (
              <IconFilledTab
                name={item.name}
                icon={item.icon}
                key={item.name}
                iconFilled={item.iconFilled}
              />
            ))}
          </div>

          <img src={thunder} className="hidden lg:block absolute top-9 right-20" />
        </div>
      </div>
    </div>
  );
};

const IconFilledTab = ({ name, icon, iconFilled }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="m-2 md:m-[6.5px] py-1 md:py-1.5 px-1 md:px-[1.125rem] bg-white flex gap-1.5 md:gap-3 items-center"
      // onMouseOver={() => setHover(true)}
      // onMouseOut={() => setHover(false)}
    >
      <div className="border border-black/[0.02] rounded-[6.5px] h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] flex items-center justify-center">
        <img src={hover ? iconFilled : icon} />
      </div>
      <p className="text-socket-gray-80 font-extrabold text-sm md:text-base">{name}</p>
    </div>
  );
};
