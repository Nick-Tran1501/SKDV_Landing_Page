import React from "react";
import { styled } from "../../../design/stitches.config";

type Props = {
  contract: string;
};

const Hotline = (props: Props) => {
  return <HotLine>{props.contract}</HotLine>;
};

const HotLine = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
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

export default Hotline;
