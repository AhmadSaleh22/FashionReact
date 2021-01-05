import React from "react";
import FullWidthTabs from "../index.jsx";
import { womenLarge } from "../img";
import * as S from "./style";

export default function Women() {
  return (
    <S.WomenMain>
      <>
        <S.WomenImg src={womenLarge} alt="img" />
        <S.LeftContent>
          <S.LeftTitle>Women’s</S.LeftTitle>
          <S.LeftTag>Discover More</S.LeftTag>
        </S.LeftContent>
      </>
      <S.RightWomen>
        <FullWidthTabs />
      </S.RightWomen>
    </S.WomenMain>
  );
}
