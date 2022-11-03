import React from "react";
import { styled } from "../../../../design/stitches.config";
import Avatar from "../../Avatar/Avatar";
import Name from "../Name/Name";

type Props = {};

const Pleasure = (props: Props) => {
  return (
    <PleasureWrapper>
      <PleasureText>
        “Working with Robert has been an absolute pleasure and we’ll definitely
        turn to his expertise for new projects.”
      </PleasureText>
      <Avatar />
      <Name />
    </PleasureWrapper>
  );
};

const PleasureWrapper = styled("div", {
  height: "auto",
  display: "flex",
  width: "$maxBound",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0 $x32",
  gap: "$x4",
  "@tablet": {
    padding: "0 $x20",
  },
  "@mobile": {
    padding: "0 $x10",
  },
});

const PleasureText = styled("p", {
  width: "100%",
  height: "auto",
  fontFamily: "$bodyFont",
  fontWeight: "$lighter",
  fontSize: "$14px",
  textAlign: "center",
});

export default Pleasure;
