import { $$PropertyValue } from "@stitches/react";
import React, { useRef } from "react";
import { Transform } from "stream";
import { styled } from "../../../../design/stitches.config";
import Button from "../../Button/Button";

type Props = {};

const Introduction = (props: Props) => {
  const ref = useRef<HTMLButtonElement>();

  return (
    <IntroductionWrapper>
      <IntroductionHeading>
        I’m currently available for freelance work.
      </IntroductionHeading>
      <IntroductionDescription>
        If you’re looking for a designer and developer that likes to get stuff
        done, let’s talk.
      </IntroductionDescription>
      <ButtonWrapper>
        <ButtonStyled bc={"linear"}>hello@robertfox.design</ButtonStyled>
        <ButtonStyled bc={"single"}>(704) 555-0127</ButtonStyled>
      </ButtonWrapper>
    </IntroductionWrapper>
  );
};

const IntroductionWrapper = styled("div", {
  height: "$x128",
  maxWidth: "$maxBound",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x4",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "$x32",
  "@tablet": {
    padding: "$x40 $x25",
    gap: "$x2",
  },
  "@mobile": {
    position: "relative",
    padding: "$x50 $x10",
    gap: "$x1",
  },
});

const IntroductionHeading = styled("h1", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$48px",
  color: "$HighContrastText",
  "@tablet": {
    fontSize: "$40px",
  },
  "@mobile": {
    fontSize: "$20px",
  },
});

const IntroductionDescription = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$lighter",
  fontSize: "$16px",
  color: "$LowContrastText",
  "@tablet": {
    fontSize: "$16px",
  },
  "@mobile": {
    fontSize: "$14px",
  },
});

const ButtonWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x8",
  height: "auto",
  width: "auto",
  "@tablet": {
    gap: "$x4",
  },
  "@mobile": {
    gap: "$x2",
  },
});

const ButtonStyled = styled(Button, {
  padding: "$x8 $x13",
  width: "$x80",
  height: "$x20",
  "@tablet": {
    width: "$x50",
    height: "$x20",
    padding: "$x6 $x10",
  },
  "@mobile": {
    width: "$x30",
    height: "$x10",
    padding: "$x4 $x13",
  },
});

export default Introduction;
