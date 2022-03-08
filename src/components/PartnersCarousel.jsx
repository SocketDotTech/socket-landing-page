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
    {
      imgSrc: zerionLogo,
      height: '29px',
    },
    {
      imgSrc: tetuLogo,
      height: '31px'
    },
    {
      imgSrc: perpetualLogo,
      height: "30px",
    },
    {
      imgSrc: zapperLogo,
      height: "42px",
    },
    {
      imgSrc: orangeLogo,
      height: "48px",
    },
    {
      imgSrc: ambireLogo,
      height: "54px",
    },
    {
      imgSrc: rubiconLogo,
      height: "38px",
    }
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        return <Item key={index} data={partner} />;
      })}
    </Slider>
  );
};

const Item = ({data}) => {
  return (
    <div className="flex items-center justify-center h-14">
      <img src={data.imgSrc} className="scale-75 md:scale-100" style={{ height: data.height }}/>
    </div>
  );
};
