import React from "react";
import { styled } from "../../../../design/stitches.config";
import { FileTextIcon, RocketIcon, LayersIcon } from "@radix-ui/react-icons";
type Props = {};

const Ability = (props: Props) => {
  return (
    <AbilityWrapper>
      <AbilityOptionsWrapper>
        <RocketIconStyled />
        <AbilityHeading>
          I can design and build a responsive and accessible website
        </AbilityHeading>
        <AbilityDescription>
          My goal is to build accessible and responsive user interfaces for the
          web and mobile, while preserving the best practices for proper user
          experience
        </AbilityDescription>
      </AbilityOptionsWrapper>

      <AbilityOptionsWrapper>
        <FileTextIconStyled />
        <AbilityHeading>
          I can design and build an eCommerce store
        </AbilityHeading>
        <AbilityDescription>
          I have extensive knowledge of development on the front-end and
          back-end so I’m able to deliver a completely functional eCommerce
          website.
        </AbilityDescription>
      </AbilityOptionsWrapper>

      <AbilityOptionsWrapper>
        <LayersIconStyled />
        <AbilityHeading>
          I can design and build a mobile app for iOS and Android
        </AbilityHeading>
        <AbilityDescription>
          I recently started designing and coding mobile apps and I love it.
          It’s a different process compared to traditional website design but
          I’ve been successful in all projects so far.
        </AbilityDescription>
      </AbilityOptionsWrapper>
    </AbilityWrapper>
  );
};

const AbilityWrapper = styled("div", {
  width: "$maxBound",
  height: "auto",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "$AppBackground",
  padding: "$x24",
  gap: "$x8",
  borderBottom: "1px solid $UIElementBorderAndFocusRings",
  "@tablet": {
    flexFlow: "column nowrap",
    gap: "$x2",
  },
  "@mobile": {
    padding: "$x4",
    gap: "$x2",
  },
});

const AbilityOptionsWrapper = styled("div", {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "$x4",
  height: "auto",
  width: "$x80",
  color: "$HighContrastText",
  "@tablet": {
    flexFlow: "column nowrap",
    width: "100%",
  },
});

const RocketIconStyled = styled(RocketIcon, {
  width: "$x8",
  height: "$x8",
});

const FileTextIconStyled = styled(FileTextIcon, {
  width: "$x8",
  height: "$x8",
});

const LayersIconStyled = styled(LayersIcon, {
  width: "$x8",
  height: "$x8",
});

const AbilityHeading = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  lineHeight: "$x3",
});

const AbilityDescription = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$lighter",
  fontSize: "$14px",
  lineHeight: "$x3",
});
export default Ability;
