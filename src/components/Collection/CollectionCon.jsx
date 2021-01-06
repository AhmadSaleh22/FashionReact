import React from "react";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import styled from "styled-components";

const Span = styled.div`
  top: 50%;
  left: 20%;
`;
const OverLay = styled.div`
  color: white;
  display: none;
  text-align: center;
  position: "absolute";
  width: 100%;
  height: 100%;
  justify-content: center;
  font-size: 18px;
  ${Span} {
    margin-top: 50%;
  }
`;

const Parent = styled.div`
  position: "relative";
  width: 227px;
  height: 320px;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    ${OverLay} {
      background-color: rgba(0, 0, 0, 0.3);
      display: inline-block;
    }
  }
`;
/* ------------------------------------------------------- */

export default function CollectionCon(props) {
  return (
    <Parent backgroundImg={props.preview}>
      <OverLay>
        <Span>
          <InstagramIcon />
          <br />
          <Typography variant="p">colorlib_Collection</Typography>
        </Span>
      </OverLay>
    </Parent>
  );
}
