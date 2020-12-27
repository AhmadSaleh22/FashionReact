import React from "react";
import Slider from "react-slick";
import { BannerImg, HeroImg } from "./img";
import * as S from "./style";
import { BannerContent } from "./BannerContent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.NextArrow className={className} onClick={onClick}>
      ＞
    </S.NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.PrevArrow
      className={className}
      style={{
        ...style,
        position: "absolute",
        border: "none",
        background: "none",
        color: "#252525",
        top: "45%",
        left: "5%",
        zIndex: "2",
        outline: "none",
        cursor: "pointer",
        fontWeight: "normal",
        fontSize: "39px",
        fontFamily: "themify",
      }}
      onClick={onClick}
    >
      ＜
    </S.PrevArrow>
  );
}

export default function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <S.SlideMain>
      <Slider {...settings}>
        <div>
          <S.ImgStyle src={BannerImg} alt="img" />
          <BannerContent />
        </div>
        <div>
          <S.ImgStyle src={HeroImg} alt="img" />
          <BannerContent />
        </div>
      </Slider>
    </S.SlideMain>
  );
}
