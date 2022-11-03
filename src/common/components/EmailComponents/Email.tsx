import React from "react";
import { styled } from "../../../design/stitches.config";

type Props = {
  email: string;
};

const Email = (props: Props) => {
  return <OurEmail>{props.email}</OurEmail>;
};

const OurEmail = styled("p", {
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
    textDecorationColor: "$HoveredSolidBackgrounds",
  },
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

export default Email;
