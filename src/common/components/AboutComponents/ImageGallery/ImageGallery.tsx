import Image from "next/future/image";
import React from "react";
import { styled } from "../../../../design/stitches.config";
import JiraImage from "../../../../image/Jira.png";

type Props = {};

const ImageGallery = (props: Props) => {
  return (
    <ImageContainer>
      <ImageWrapper src={JiraImage} alt="JiraImage" />
      <ImageWrapper src={JiraImage} alt="JiraImage" />
      <ImageWrapper src={JiraImage} alt="JiraImage" />
    </ImageContainer>
  );
};

const ImageContainer = styled("div", {
  height: "$x90",
  minWidth: "$maxBound",
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x12",
  padding: "$x8 $x5",
  backgroundColor: "$SubtleBackground",
  justifyContent: "space-evenly",
  "@tablet": {
    flexFlow: "column nowrap",
    gap: "$x10",
    padding: "$x10 $x30",
  },
  "@mobile": {
    flexFlow: "column nowrap",
    gap: "$x4",
    padding: "$x10 $x2",
  },
});

const ImageWrapper = styled(Image, {
  width: "30%",
  height: "auto",
  filter:
    "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",

  "@tablet": {
    width: "100%",
  },
  "@mobile": {
    width: "100%",
  },
});

export default ImageGallery;
