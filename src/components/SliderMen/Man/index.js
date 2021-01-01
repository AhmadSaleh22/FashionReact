import React from "react";
import FullWidthTabs from "../index.jsx";
import { MenLarge } from "../../SliderWomen/img";
import * as S from "../../SliderWomen/Women/style";

export function Man() {
  return (
    <S.WomenMain>
      <S.RightWomen primary>
        <FullWidthTabs />
      </S.RightWomen>
      <>
        <S.WomenImg primary src={MenLarge} alt="img" />
        <S.LeftContent primary>
          <S.LeftTitle>Men’s</S.LeftTitle>
          <S.LeftTag primary>Discover More</S.LeftTag>
        </S.LeftContent>
      </>
    </S.WomenMain>
  );
}
