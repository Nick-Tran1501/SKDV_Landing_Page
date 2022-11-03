/* eslint-disable react/display-name */
import { styled } from "../../../design/stitches.config";
import React, { forwardRef } from "react";

type Props = React.ComponentProps<typeof StyledButton>;

const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {props.children}
      </StyledButton>
    );
  }
);

const StyledButton = styled("button", {
  border: "none",
  padding: "$x1 $x7",
  display: "flex",
  flexFlow: "row",
  gap: "$x4",
  justifyContent: "center",
  alignItems: "center",
  // background: "linear-gradient(270deg, #3B9ED1 0%, #40C4AA 100%)",
  boxShadow:
    "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);",
  borderRadius: "100px",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "$HighContrastText",
  },
  variants: {
    bc: {
      single: {
        background: "$HoveredUIElementBackground",
      },
      linear: {
        background: "linear-gradient(270deg, #3B9ED1 0%, #40C4AA 100%)",
        color: "$AppBackground",
      },
    },
  },
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

// const TextButton = styled("p", {
//   fontFamily: "$bodyFont",
//   fontSize: "$16px",
//   fontWeight: "$bold",
//   color: "$UiElementBackground",
//   variants: {},
// });

export default Button;
