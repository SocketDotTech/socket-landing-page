import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// partners logos
import zerionLogo from "../assets/partners/zerion-logo.svg";
import tetuLogo from "../assets/partners/tetu-logo.svg";
import zapperLogo from "../assets/partners/zapper-logo.svg";
import orangeLogo from "../assets/partners/orange-logo.png";
import ambireLogo from "../assets/partners/ambire-logo.png";
import perpetualLogo from "../assets/partners/perpetual-logo.svg";
import rubiconLogo from "../assets/partners/rubicon-logo.svg";

export const PartnersCarousel = () => {
  const partners = [
    zerionLogo,
    tetuLogo,
    perpetualLogo,
    zapperLogo,
    orangeLogo,
    ambireLogo,
    // atlantis
    rubiconLogo,
    // 2 more
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      }
    ]      
  };
  return (
    <Slider {...settings}>
      {partners.map((partner, index) => {
        return <Item key={index} imgSrc={partner} />;
      })}
    </Slider>
  );
};

const Item = ({imgSrc}) => {
  return (
    <div className="flex items-center justify-center">
      <img src={imgSrc} className="h-8 md:h-10" />
    </div>
  );
};
