import React from "react";
import { styled } from "../../../design/stitches.config";

type Props = {};

const MyWork = (props: Props) => {
  return (
    <MyWorkWrapper>
      <MyWorkTitle>My Work</MyWorkTitle>
      <MyWorkDescription>
        I specialize in website design and development, but I’ve also designed
        successful iOS and Android apps.
      </MyWorkDescription>
    </MyWorkWrapper>
  );
};

const MyWorkWrapper = styled("div", {
  backgroundColor: "$AppBackground",
  width: "$maxBound",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "$x25",
  "@tablet": {
    padding: "$x20",
  },
  "@mobile": {
    padding: "$x15",
  },
});

const MyWorkTitle = styled("h1", {
  fontFamily: "$bodyFont",
  fontSize: "$20px",
  fontWeight: "$bold",
  color: "$HighContrastText",
});

const MyWorkDescription = styled("p", {
  fontFamily: "$bodyFont",
  fontSize: "$14px",
  fontWeight: "$lighter",
  color: "$LowContrastText",
  textAlign: "justify",
});

export default MyWork;
