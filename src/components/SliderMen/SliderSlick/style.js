import styled from "styled-components";

export const MainHover = styled.div`
  display: none;
`;
export const CardImg = styled.img`
  width: 240px;
  height: 298px;
  max-width: 100%;
  margin: 0;
  position: relative;
`;
export const CardMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &:hover {
    transition: all 1s ease-out;
    ${MainHover} {
      display: block;
      transition: all 1s ease-out;
    }
  }
`;
export const ContentCard = styled.div`
  text-align: center;
  margin-top: 7%;
`;
export const Category = styled.div`
  font-size: 10px;
  color: #b2b2b2;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CategoryTitle = styled.h5`
  font-size: 18px;
  color: #252525;
  font-weight: 400;
`;
export const Sale = styled.div`
  display: none;
  &:first-of-type {
    position: absolute;
    color: #ffffff;
    font-size: 10px;
    background: #76bc42;
    left: 20;
    top: 20px;
    padding: 5px 10px;
    text-transform: uppercase;
  }
`;

export const CardPrice = styled.div`
  color: #e7ab3c;
  font-size: 20px;
  font-weight: 700;
`;

export const PrevPrice = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #b2b2b2;
  text-decoration: line-through;
  margin-left: 2%;
  margin-bottom: 20px;
`;
export const Heart = styled.div`
  position: absolute;
  cursor: pointer;
  top: 2%;
  margin-left: 200px;
`;
export const HoverMain = styled.div`
  position: absolute;
  top: 63%;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
`;
export const HoverBox = styled.div`
  margin-left: 15px;
  color: white;
  font-size: 16px;
  background: #e7ab3c;
  padding: 8px;
  margin-right: 2px;
  cursor: pointer;
`;
export const LinkQuick = styled.div`
  margin-left: 3px;
  font-size: 16px;
  font-weight: 700;
  color: #252525;
  font-size: 16px;
  background: #fff;
  padding: 8px;
  margin-right: 2px;
`;
export const LinkBox = styled.a`
  color: #252525;
  padding: 5px;
  text-decoration: none;
  background-color: transparent;
`;
export const RandomSvg = styled.img`
  width: 15px;
  color: #252525;
  height: 20px;
`;
export const MainRandom = styled.div`
  cursor: pointer;
  background: white;
  margin-left: 2px;
  padding: 10px;
`;
