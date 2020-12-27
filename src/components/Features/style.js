import styled from "styled-components";

export const FeaturesImg = styled.img`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
  margin-left: 30px;
  margin-right: 30px;
`;
export const FeaturesMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: space-between;
`;
export const Layer = styled.div`
  position: absolute;
  left: 35px;
  top: 30px;
  border: 13px solid #ffffff;
  content: "";
  opacity: 0.3;
  color: white;
  padding: 75px 80px;
  width: 40%;
  margin-left: 20px;
  z-index: 20;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  display: none;
`;
export const FeaturesDiv = styled.div`
  width: 29%;
  margin-left: 30px;
  position: relative;
  &:hover {
    ${Layer} {
      display: block;
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
    }
  }
`;

export const InnerText = styled.div`
  position: absolute;
  left: 30px;
  top: 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
`;

export const InnerTextBox = styled.h4`
  color: #252525;
  font-weight: 700;
  padding: 11px 28px;
  background: #ffffff;
  border-radius: 2px;
  font-size: 24px;
  font-family: sans-serif;
`;
