import React from "react";
import { styled } from "../../../../design/stitches.config";
import { ClockIcon, ArchiveIcon } from "@radix-ui/react-icons";
type Props = {};

const Quality = (props: Props) => {
  return (
    <QualityWrapper>
      <QualityHeading>
        Regardless of project size, you will always get:
      </QualityHeading>

      <ServiceContainer>
        <ServiceOptionsContainer>
          {/* ---------- Option 1 ----------- */}
          <ServiceHeadingWrapper>
            <OptionTimeHeading>1. On-time delivery</OptionTimeHeading>
            <TimeIcon />
          </ServiceHeadingWrapper>
          <OptionDescription>
            I know time is money so I don’t want to waste yours. Or mine. So I
            guarantee that I will always deliver what you pay for as promised.
          </OptionDescription>
        </ServiceOptionsContainer>

        <ServiceOptionsContainer>
          <ServiceHeadingWrapper>
            <OptionQualityHeading>2. Quality</OptionQualityHeading>
            <QualityIcon />
          </ServiceHeadingWrapper>
          <OptionDescription>
            I don’t want to put my name on something subpar so my first concern
            is always quality. No matter what, you will love the end result.
          </OptionDescription>
        </ServiceOptionsContainer>
      </ServiceContainer>
    </QualityWrapper>
  );
};

const QualityWrapper = styled("div", {
  width: "$maxBound",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  padding: "$x24 $x30",
  gap: "$x16",
  backgroundColor: "$AppBackground",
  height: "auto",
  "@tablet": {
    gap: "$x10",
    padding: "$x30",
  },
  "@mobile": {
    gap: "$x2",
    padding: "$x20 $x4 $x30 ",
  },
});

const QualityHeading = styled("h1", {
  width: "100%",
  height: "$x20",
  fontFamily: "$bodyFont",
  fontWeight: "$semiBold",
  fontSize: "$32px",
  color: "$HighContrastText",
  "@tablet": {
    width: "100%",
    fontSize: "$28px",
  },
  "@mobile": {
    width: "100%",
    fontSize: "$20px",
  },
});

const ServiceContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexFlow: "row nowrap",
  gap: "$x25",
  justifyContent: "flex-start",
  "@tablet": {
    gap: "$x20",
  },
  "@mobile": {
    flexFlow: "column nowrap",
    justifyContent: "center",
    padding: "$x4",
  },
});

const ServiceOptionsContainer = styled("div", {
  displayL: "flex",
  flexFlow: "column nowrap",
  gap: "$x2",
  fontFamily: "$bodyFont",
  fontSize: "$16px",
  width: "100%",
  height: "$x30",
});

const ServiceHeadingWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "$x1",
  fontWeight: "$bold",
});

const OptionTimeHeading = styled("p", {
  color: "$HighContrastText",
});

const TimeIcon = styled(ClockIcon, {
  color: "$HighContrastText",
});

const OptionQualityHeading = styled("p", {
  color: "$HighContrastText",
});

const QualityIcon = styled(ArchiveIcon, {
  color: "$HighContrastText",
});

const OptionDescription = styled("p", {
  fontWeight: "$lighter",
  color: "$HighContrastText",
});

export default Quality;
