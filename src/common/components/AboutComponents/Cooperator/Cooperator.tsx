import React from "react";
import { styled } from "../../../../design/stitches.config";
import Avatar from "../../Avatar/Avatar";
type Props = {};

const Cooperator = (props: Props) => {
  return (
    <CooperatorWrapper>
      <CardInformationWrapper>
        <CardFeedback>
          “Working with Robert has been an absolute pleasure and we’ll
          definitely turn to his expertise for new projects.”
        </CardFeedback>

        <Avatar />

        <CardCooperator>
          <CooperatorInformation>James Wittings</CooperatorInformation>

          <CooperatorInformation>
            Marketing Director at Amazon
          </CooperatorInformation>
        </CardCooperator>
      </CardInformationWrapper>

      <CardInformationWrapper>
        <CardFeedback>
          “Robert is great. We worked together really well and we’ll definitely
          contract his services in the future.”
        </CardFeedback>

        <Avatar />

        <CardCooperator>
          <CooperatorInformation>James Wittings</CooperatorInformation>

          <CooperatorInformation>
            Marketing Director at Amazon
          </CooperatorInformation>
        </CardCooperator>
      </CardInformationWrapper>
    </CooperatorWrapper>
  );
};

const CooperatorWrapper = styled("div", {
  backgroundColor: "$SubtleBackground",
  width: "$maxBound",
  height: "auto",
  display: "flex",
  flexFlow: "row nowrap",
  padding: "$x8 $x20",
  justifyContent: "space-around",
  gap: "$x20",
  "@tablet": {
    gap: "$x10",
  },
  "@mobile": {
    gap: "$x2",
    padding: "$x8",
  },
});

const CardInformationWrapper = styled("div", {
  backgroundColor: "$AppBackground",
  width: "50%",
  height: "auto",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x4",
  padding: "$x12",
  alignItems: "center",
  boxShadow:
    "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)",
  "@tablet": {
    gap: "$x2",
  },
  "@mobile": {
    gap: "$x1",
    padding: "$x2",
  },
});

const CardFeedback = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "lighter",
  textAlign: "justify",
  fontSize: "$14px",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

const CardCooperator = styled("div", {
  display: "flex",
  flexFlow: "column nowrap",
  width: "100%",
  height: "auto",
  textAlign: "center",
});

const CooperatorInformation = styled("p", {
  fontFamily: "$bodyFont",
  fontWeight: "$bold",
  fontSize: "$14px",
  color: "$HighContrastText",
  "@tablet": {
    fontSize: "$12px",
  },
  "@mobile": {
    fontSize: "$10px",
  },
});

export default Cooperator;
