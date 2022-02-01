import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// partners logos
import socketLogo from "../assets/partners/socket-white-logo.png";

export const PartnersCarousel = () => {
  const partners = [
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
    socketLogo,
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const Item = (imgSrc) => {
  return (
    <div className="flex items-center justify-center">
      <img src={socketLogo} className="h-16" />
      {/* <img src={imgSrc} className="h-16" /> */}
    </div>
  );
};
