import React from "react";
import { styled } from "../../../design/stitches.config";
import {
  VercelLogoIcon,
  DiscordLogoIcon,
  StitchesLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

type Props = {};

const Companies = (props: Props) => {
  return (
    <CompaniesWrapper>
      {/* <CompaniesHonour>
        I had the pleasure of working with these awesome companies
      </CompaniesHonour>

      <IconWrapper>
        <StyledVercelLogo />
        <StyledDiscordLogo />
        <StyledStitchesLogo />
        <StyledGitHubLogo />
        <StyledLinkedInLogo />
      </IconWrapper> */}
    </CompaniesWrapper>
  );
};

const CompaniesWrapper = styled("div", {
  backgroundColor: "$UiElementBackground",
  minWidth: "$maxBound",
  height: "auto",
  borderTop: "1px solid $UIElementBorderAndFocusRings",
  borderBottom: "1px solid $UIElementBorderAndFocusRings",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  color: "$HighContrastText",
  gap: "$x5",
  padding: "$x8",
});

const CompaniesHonour = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$light",
  textAlign: "center",
  fontSize: "$14px",
});

const IconWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x8",
  "@tablet": {
    gap: "$x4",
  },
});

const StyledVercelLogo = styled(VercelLogoIcon, {
  width: "$x8",
  height: "$x8",
});

const StyledDiscordLogo = styled(DiscordLogoIcon, {
  width: "$x8",
  height: "$x8",
});

const StyledStitchesLogo = styled(StitchesLogoIcon, {
  width: "$x8",
  height: "$x8",
});

const StyledGitHubLogo = styled(GitHubLogoIcon, {
  width: "$x8",
  height: "$x8",
});

const StyledLinkedInLogo = styled(LinkedInLogoIcon, {
  width: "$x8",
  height: "$x8",
});

export default Companies;
