import React from "react";
import { styled } from "../../../design/stitches.config";
import Image from "next/future/image";
import logo from "../../../image/skdv-line.png";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Email from "../../components/EmailComponents/Email";
import Hotline from "../../components/Hotline/Hotline";
type Props = {};

const Nav = (props: Props) => {
  return (
    <NavWrapper>
      <LeftNavWrapper>
        <Link href={"/"}>
          <ImageWrapper>
            <Image width={70} height={24} alt="logo" src={logo} />
          </ImageWrapper>
        </Link>

        <Link href={"/about-us"}>
          <AboutLink href={"/about-us"}>About Us</AboutLink>
        </Link>

        <Link href={"/contact"}>
          <ContactLink href={"/contact"}>Contact</ContactLink>
        </Link>
      </LeftNavWrapper>

      <RightNavWrapper>
        <ContactInformationWrapper>
          <Email email={"SkyDev.SKDV@gmail.com"}></Email>
          <Hotline contract={"012-3456-789"}></Hotline>
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
    </NavWrapper>
  );
};

// ------------------- Styled Components --------------------

const NavWrapper = styled("div", {
  backgroundColor: "$UiElementBackground",
  display: "flex",
  flexFlow: "row nowrap",
  color: "$HighContrastText",
  alignItems: "center",
  justifyContent: "space-around",
  minWidth: "$maxBound",
  height: "$x16",
  padding: "$x5 $x12",
  position: "fixed",
  top: "0",
  borderBottom: "1px solid $UIElementBorderAndFocusRings",
  zIndex: "1",
  "@tablet": {
    padding: "$x5 $x20",
    height: "$x14",
  },
  "@mobile": {
    padding: "$x5 0",
    height: "$x12",
  },
});

const LeftNavWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  flexBasis: "50%",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "$x4",
  "@tablet": {
    gap: "0",
  },
  "@mobile": {
    gap: "0",
  },
});

const RightNavWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  flexBasis: "50%",
  gap: "$x4",
  alignItems: "center",
  justifyContent: "space-evenly",
  "@tablet": {
    gap: "$x2",
    paddingRight: "$x2",
  },
  "@mobile": {
    gap: "$x1",
    paddingRight: "$x2",
  },
});

//----------------- Left Side---------------------
const ImageWrapper = styled("a", {
  cursor: "pointer",
  "@tablet": {
    width: "auto",
    height: "$x5",
  },
  "@mobile": {
    width: "auto",
    height: "$x5",
  },
});

const AboutLink = styled("a", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  width: "$x22",
  height: "$x6",
  fontSize: "$14px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexFlow: "column",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "$HoveredUIElementBorder",
    color: "$HoveredUIElementBorder",
  },
  "@tablet": {
    fontSize: "$12px",
    width: "$x16",
  },
  "@mobile": {
    fontSize: "$10px",
    width: "$x10",
  },
});

const ContactLink = styled("a", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  width: "$x22",
  height: "$x6",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexFlow: "column",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "$HoveredUIElementBorder",
    color: "$HoveredUIElementBorder",
  },
  "@tablet": {
    fontSize: "$12px",
    width: "$x16",
  },
  "@mobile": {
    fontSize: "$10px",
    width: "$x10",
  },
});

//----------------- Right Side---------------------

const ContactInformationWrapper = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  gap: "$x4",
  flexGrow: "2",
  justifyContent: "flex-end",
  alignItems: "center",
  "@tablet": {
    fontSize: "$12px",
    gap: "$x2",
  },
  "@mobile": {
    fontSize: "$10px",
    gap: "0",
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
    gap: "0",
  },
});

const LogoLink = styled("a", {});

const StyledGitHubLogoIcon = styled(GitHubLogoIcon, {
  width: "$x8",
  height: "$x8",
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
  width: "$x8",
  height: "$x8",
  "@tablet": {
    width: "$x7",
    height: "$x7",
  },
  "@mobile": {
    width: "$x4",
    height: "$x4",
  },
});

export default Nav;
