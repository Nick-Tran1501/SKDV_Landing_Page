import React from "react";
import { styled } from "../../../../design/stitches.config";
import Image from "next/future/image";
import SecondDashboardImage from "../../../../image/SecondDashboard.png";

type Props = {};

const SecondDashboard = (props: Props) => {
  return (
    <SecondDashboardWrapper>
      <SecondDashboardImageWrapper
        src={SecondDashboardImage}
        alt={"DashboardImage"}
        width={1023}
        height={507}
      />
    </SecondDashboardWrapper>
  );
};

const SecondDashboardWrapper = styled("div", {
  height: "$x128",
  backgroundColor: "$SubSecondaryBackground",
  minWidth: "$maxBound",
  display: "flex",
  justifyContent: "center",
  padding: "$x12",
  "@tablet": {
    padding: "0 $x10",
  },
  "@mobile": {
    padding: "0 $x4",
  },
});

const SecondDashboardImageWrapper = styled(Image, {
  marginTop: "$x12",
  "@tablet": {
    width: "100%",
    height: "$x128",
  },
});

export default SecondDashboard;
