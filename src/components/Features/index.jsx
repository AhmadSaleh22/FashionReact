import { Features1, Features2, Features3 } from "./img";
import * as S from "./style";

export function Features() {
  return (
    <S.FeaturesMain>
      <S.FeaturesDiv>
        <S.Layer />
        <S.FeaturesImg src={`${Features1}`} alt="img" />
        <S.InnerText>
          <S.InnerTextBox>Men's</S.InnerTextBox>
        </S.InnerText>
      </S.FeaturesDiv>
      <S.FeaturesDiv>
        <S.Layer></S.Layer>
        <S.FeaturesImg src={`${Features2}`} alt="img" />
        <S.InnerText>
          <S.InnerTextBox>Women's</S.InnerTextBox>
        </S.InnerText>
      </S.FeaturesDiv>
      <S.FeaturesDiv>
        <S.Layer></S.Layer>
        <S.FeaturesImg src={`${Features3}`} alt="img" />
        <S.InnerText>
          <S.InnerTextBox>Kid's</S.InnerTextBox>
        </S.InnerText>
      </S.FeaturesDiv>
    </S.FeaturesMain>
  );
}
