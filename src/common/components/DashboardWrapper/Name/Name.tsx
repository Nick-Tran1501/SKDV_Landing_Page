import { styled } from "../../../../design/stitches.config";
import React from "react";

type Props = {};

const Name = (props: Props) => {
  return (
    <NameWrapper>
      <NameText>Thai Tran</NameText>
      <JobText>Team CFO at SKDV</JobText>
    </NameWrapper>
  );
};

const NameWrapper = styled("div", {
  fontFamily: "$bodyFont",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x1",
  justifyContent: "center",
  alignItems: "center",
});

const NameText = styled("p", {
  fontWeight: "$bold",
  fontSize: "$14px",
});

const JobText = styled("p", {
  fontWeight: "$light",
  fontSize: "$14px",
});
export default Name;
