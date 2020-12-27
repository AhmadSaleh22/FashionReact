import React from "react";
import * as S from "./style";

export const BannerContent = () => {
  return (
    <S.ContentMain>
      <S.TitleBanner>Bag,kids</S.TitleBanner>
      <S.TitleTwo>Black friday</S.TitleTwo>
      <S.ContentBanner>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        <br />
        do eiusmod tempor incididunt ut labore et dolore
      </S.ContentBanner>
      <S.BannerTag href="#">Shop now</S.BannerTag>
    </S.ContentMain>
  );
};
