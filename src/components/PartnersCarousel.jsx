import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// partners logos
import zerionLogo from "../assets/partners/zerion-logo.svg";
import tetuLogo from "../assets/partners/tetu-logo.svg";
import fantomLogo from "../assets/partners/fantom-logo.svg";
import zapperLogo from "../assets/partners/zapper-logo.svg";

export const PartnersCarousel = () => {
  const partners = [
    zerionLogo,
    tetuLogo,
    fantomLogo,
    zapperLogo,
    zerionLogo,
    tetuLogo,
    fantomLogo,
    zapperLogo,
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
      <img src={imgSrc} className="h-10" />
    </div>
  );
};
