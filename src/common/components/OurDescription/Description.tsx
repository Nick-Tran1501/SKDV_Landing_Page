import React from "react";
import { styled } from "../../../design/stitches.config";
import Email from "../EmailComponents/Email";
import Hotline from "../Hotline/Hotline";
import Button from "../Button/Button";
type Props = {};

const Description = (props: Props) => {
  return (
    <DescriptionWrapper>
      <HeadDescription>
        I’m currently available for freelance work.
      </HeadDescription>
      <SubDescription>
        If you’re looking for a designer and developer that likes to get stuff
        done, let’s talk.
      </SubDescription>

      <ContractWrapper>
        <Email email={"SkyDev.SKDV@gmail.com"}></Email>
        <Hotline contract={"012-3456-789"}></Hotline>
      </ContractWrapper>
      <StyledButton bc={"linear"}>
        Got a Project in Mind? Let’s talk!
      </StyledButton>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled("div", {
  width: "$maxBound",
  padding: "$x30",
  height: "auto",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "flex-start",
  gap: "$x8",
  backgroundColor: "$AppBackground",
  "@tablet": {
    gap: "$x4",
  },
  "@mobile": {
    padding: "$x4",
  },
});

const HeadDescription = styled("h2", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$40px",
  color: "$HighContrastText",
  "@tablet": {
    fontSize: "$32px",
  },
  "@mobile": {
    fontSize: "$28px",
  },
});

const SubDescription = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$lighter",
  fontSize: "$20px",
  color: "$LowContrastText",
  opacity: "0.8",
  "@tablet": {
    fontSize: "$18px",
  },
  "@mobile": {
    fontSize: "$16px",
  },
});

const ContractWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x22",
  "@tablet": {
    gap: "$x10",
  },
  "@mobile": {
    gap: "$x5",
  },
});

const StyledButton = styled(Button, {
  width: "$x95",
  height: "$x20",
  padding: "$x6 $x12",
  color: "white",
  "@tablet": {
    width: "$x65",
    height: "$x15",
  },
  "@mobile": {
    width: "$x50",
    height: "$x15",
  },
});

export default Description;
