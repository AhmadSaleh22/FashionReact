import React, { useContext, useState } from "react";
import Slider from "react-slick";
import * as S from "./style";
import { RandomSvg } from "../img.jsx";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { DataContext } from "../../Context";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        border: "none",
        background: "none",
        color: "#252525",
        top: "45%",
        right: "3%",
        zIndex: "2",
        outline: "none",
        cursor: "pointer",
        fontWeight: "normal",
        fontSize: "39px",
        fontFamily: "themify",
      }}
      onClick={onClick}
    >
      ＞
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        border: "none",
        background: "none",
        color: "grey",
        opacity: ".5",
        top: "45%",
        left: "-4.5%",
        zIndex: "10",
        outline: "none",
        cursor: "pointer",
        fontWeight: "normal",
        fontSize: "39px",
        fontFamily: "themify",
      }}
      onClick={onClick}
    >
      ＜
    </div>
  );
}

export default function CustomArrows() {
  const [heart, setHeart] = useState(false);
  const showHeart = () => setHeart(!heart);

  const value = useContext(DataContext);
  const addCart = value.addCart;
  const [products] = value.products;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => (
          <S.CardMain key={product._id}>
            <S.CardImg src={product.src} alt="img" />
            <S.Sale>{product.sale}</S.Sale>
            <S.ContentCard>
              <S.Category>{product.title}</S.Category>
              <S.CategoryTitle>{product.description}</S.CategoryTitle>
              <S.CardPrice>
                ${product.price}
                <S.PrevPrice>{product.prevPrice}</S.PrevPrice>
              </S.CardPrice>
            </S.ContentCard>
            <S.MainHover>
              <S.Heart>
                <FavoriteBorderIcon
                  className={heart ? "activeHeart" : ""}
                  onClick={showHeart}
                />
              </S.Heart>
              <S.HoverMain>
                <S.HoverBox>
                  <LocalMallIcon onClick={() => addCart(product._id)} />
                </S.HoverBox>
                <S.LinkQuick>
                  <S.LinkBox href="#">+ Quick View</S.LinkBox>
                </S.LinkQuick>
                <S.MainRandom>
                  <S.RandomSvg src={RandomSvg} alt="img" />
                </S.MainRandom>
              </S.HoverMain>
            </S.MainHover>
          </S.CardMain>
        ))}
      </Slider>
    </div>
  );
}
