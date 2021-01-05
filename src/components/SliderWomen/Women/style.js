import styled from "styled-components";

export const WomenMain = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
export const WomenImg = styled.img`
  height: 620px;
  max-width: 60%;
  width: 300px;
  margin-left: ${(props) => (props.primary ? "10%" : "5%")};
  object-fit: cover;
  position: relative;
`;
export const LeftWomen = styled.div`
  margin-left: 4%;
  width: 40%;
  position: relative;
`;
export const RightWomen = styled.div`
  width: 62%;
  overflow: hidden;
  margin-top: 5%;
  margin-left: ${(props) => (props.primary ? "20px" : "100px")};
`;
export const LeftContent = styled.div`
  position: absolute;
  top: 45%;
  left: ${(props) => (props.primary ? "80%" : "7%")};
`;
export const LeftTitle = styled.h2`
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 18px;
`;
export const LeftTag = styled.a`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-left: ${(props) => (props.primary ? "0%" : "20%")};
  &:after {
    position: absolute;
    left: ${(props) => (props.primary ? "0" : "40px")};
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #ffffff;
    content: "";
    width: 120px;
  }
`;
