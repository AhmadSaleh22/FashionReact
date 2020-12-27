import styled from "styled-components";

export const ImgStyle = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  outline: none;
`;
export const SlideMain = styled.div`
  position: relative;
`;

export const PrevArrow = styled.div`
  &:before {
    display: none;
  }
  &:hover {
    color: rgb(223, 173, 81);
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  border: none;
  background: none;
  color: #252525;
  top: 45%;
  right: 5%;
  outline: none;
  cursor: pointer;
  font-weight: normal;
  font-size: 39px;
  font-family: "themify";
  &:before {
    display: none;
  }
  &:hover {
    color: rgb(223, 173, 81);
  }
`;
