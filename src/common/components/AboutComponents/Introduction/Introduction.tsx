import React from "react";
import { styled } from "../../../../design/stitches.config";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <IntroductionWrapper>
      <IntroductionHeading>We are SKDV</IntroductionHeading>
      <IntroductionDescription>
        I was born in Henderson, Nevada almost three decades ago. From an early
        age I showed interest for computers and that grew into a passion during
        high school. I got into web design and development in college. Attending
        the Carnegie Mellon University in Pittsburgh was the best decision I
        ever made because it showed me what I wanted to do for the rest of my
        life. Currently I help businesses all around the world by designing and
        coding websites and mobile apps. I had the pleasure of working with big
        companies like Apple, Microsoft and Amazon, just to name a few. Right
        now I’m based in New York.
      </IntroductionDescription>
    </IntroductionWrapper>
  );
};
const IntroductionWrapper = styled("div", {
  backgroundColor: "$AppBackground",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x2",
  justifyContent: "center",
  alignItems: "flex-start",
  minWidth: "$maxBound",
  padding: "$x30",
  "@tablet": {
    padding: "$x30 $x15",
  },
  "@mobile": {
    padding: "$x30 $x10",
  },
});

const IntroductionHeading = styled("h1", {
  fontFamily: "$bodyFont",
  fontSize: "$64px",
  fontWeight: "$bold",
  colors: "$HighContrastText",
  "@tablet": {
    fontSize: "$48px",
  },
  "@mobile": {
    fontSize: "$36px",
  },
});
const IntroductionDescription = styled("p", {
  width: "$x200",
  color: "$LowContrastText",
  fontFamily: "$bodyFont",
  fontSize: "$16px",
  fontWeight: "$lighter",
  textAlign: "justify",
  lineHeight: "$x3",
  "@tablet": {
    fontSize: "$14px",
    width: "100%",
  },
  "@mobile": {
    fontSize: "$13px",
    width: "100%",
  },
});

export default Introduction;
