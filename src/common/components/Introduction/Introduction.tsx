import React from "react";
import { styled } from "../../../design/stitches.config";
import Button from "../Button/Button";
import { ArrowDownIcon } from "@radix-ui/react-icons";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <IntroductionWrapper>
      <IntroductionTextWrapper>
        <HelloText>Chúng tôi là SKDV</HelloText>
        <IntroductionText>
          Giải pháp công nghệ và chuyển đổi số
        </IntroductionText>
        <DescriptionText>
        Sứ mênh của chúng tôi là đem đên giải pháp công nghệ và chuyển đổi số cho doanh nghiệp đang phát triển.
        </DescriptionText>
      </IntroductionTextWrapper>
      <StyledButton bc={"linear"}>
        Xem thêm về sản phẩm 
        {/* <StyledButtonIcon /> */}
      </StyledButton>
    </IntroductionWrapper>
  );
};

const IntroductionWrapper = styled("div", {
  backgroundColor: "$AppBackground",
  height: "auto",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x13",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "$maxBound",
  padding: "$x32",
  "@tablet": {
    padding: "$x32 $x20",
  },
  "@mobile": {
    padding: "$x32 $x4",
  },
});

const IntroductionTextWrapper = styled("div", {
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x6",
  width: "100%",
  justifyContent: "center",
  alignContent: "center",
});

const HelloText = styled("h1", {
  fontFamily: "$bodyFont",
  fontWeight: "$light",
  fontSize: "$40px",
  textAlign: "center",
  background: "linear-gradient(270deg, #3B9ED1 0%, #40C4AA 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  margin: "0",
  "@tablet": {
    fontSize: "$32px",
  },
  "@mobile": {
    fontSize: "$20px",
  },
});

const IntroductionText = styled("h2", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$64px",
  textAlign: "center",
  color: "$HighContrastText",
  margin: "0",
  "@tablet": {
    fontSize: "$48px",
  },
  "@mobile": {
    fontSize: "$32px",
  },
});

const DescriptionText = styled("h3", {
  color: "$LowContrastText:",
  fontFamily: "$bodyFont",
  fontSize: "$16px",
  fontWeight: "$lighter",
  textAlign: "center",
  lineHeight: "$x3",
  margin: "0",
  "@tablet": {
    fontSize: "$14px",
  },
  "@mobile": {
    fontSize: "$12px",
  },
});

const StyledButton = styled(Button, {
  width: "$x60",
  height: "$x15",
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
});

const StyledButtonIcon = styled(ArrowDownIcon, {
  color: "$UiElementBackground",
  fontSize: "$x4",
  width: "$x4",
  height: "21px",
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
});

export default Introduction;
