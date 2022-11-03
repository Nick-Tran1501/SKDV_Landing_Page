import React, { Fragment } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { styled } from "../../../design/stitches.config";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <LeftNavWrapper>
        <CopyRight>
          (c) Copyright Robert Fox 2022. All rights reserved.
        </CopyRight>

        <Privacy>Privacy</Privacy>

        <TermCondition>Term & Condition</TermCondition>
      </LeftNavWrapper>

      <RightNavWrapper>
        <ContactInformationWrapper>
          <Email>SkyDev.SKDV@gmail.com</Email>
          <HotLine>012-3456-789</HotLine>
        </ContactInformationWrapper>

        <VerticalLineBreak></VerticalLineBreak>

        <ConnectionWrapper>
          {/* Github Icon */}
          <Link href="https://github.com/">
            <LogoLink href="https://github.com/" target="_blank">
              <StyledGitHubLogoIcon></StyledGitHubLogoIcon>
            </LogoLink>
          </Link>

          {/* LinkedIn Logo */}
          <LogoLink href="https://www.linkedin.com" target="_blank">
            <StyledLinkedInLogoIcon></StyledLinkedInLogoIcon>
          </LogoLink>
        </ConnectionWrapper>
      </RightNavWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled("div", {
  backgroundColor: "$UiElementBackground",
  display: "flex",
  flexFlow: "row nowrap",
  color: "$HighContrastText",
  alignItems: "center",
  justifyContent: "space-around",
  minWidth: "$maxBound",
  height: "auto",
  padding: "$x5 $x12",
  borderTop: "1px solid $UIElementBorderAndFocusRings",
  "@tablet": {
    padding: "$x5 $x8",
    gap: "$x2",
  },
  "@mobile": {
    position:"absolute",
    padding: "$x5 $x2",
    gap: "$x1",
    justifyContent: "center",
  },
});

const LeftNavWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  height: "auto",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$x16",
  "@tablet": {
    gap: "$x2",
  },
  "@mobile": {
    gap: "$x1",
  },
});

const RightNavWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x4",
  alignItems: "center",
  justifyContent: "space-evenly",
  "@tablet": {
    gap: "$x2",
  },
  "@mobile": {
    gap: "$x1",
  },
});

// -----------Left Side Component --------------

const CopyRight = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$light",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

const Privacy = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

const TermCondition = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});
// -----------Right Side Component --------------
const ContactInformationWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x4",
  flexGrow: "2",
  justifyContent: "flex-end",
  alignItems: "center",
  "@tablet": {
    gap: "$x2",
  },
  "@mobile": {
    gap: "$x1",
  },
});

const Email = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  background: "linear-gradient(270deg, #3B9ED1 0%, #40C4AA 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "blue",
  },
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

const HotLine = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

const VerticalLineBreak = styled("hr", {
  height: "17px",
  border: "1px solid  $UIElementBorderAndFocusRings",
});

const ConnectionWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x4",
  flexGrow: "0",
  justifyContent: "flex-end",
  "@tablet": {
    gap: "$x2",
  },
  "@mobile": {
    gap: "$x1",
  },
});

const LogoLink = styled("a", {});

const StyledGitHubLogoIcon = styled(GitHubLogoIcon, {
  width: "27px",
  height: "27px",
  "@tablet": {
    width: "$x7",
    height: "$x7",
  },
  "@mobile": {
    width: "$x4",
    height: "$x4",
  },
});

const StyledLinkedInLogoIcon = styled(LinkedInLogoIcon, {
  width: "27px",
  height: "27px",
  "@tablet": {
    width: "$x7",
    height: "$x7",
  },
  "@mobile": {
    width: "$x4",
    height: "$x4",
  },
});

export default Footer;
