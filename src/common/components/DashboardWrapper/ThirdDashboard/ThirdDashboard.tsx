import React from "react";
import { styled } from "../../../../design/stitches.config";
import Image from "next/future/image";
import SecondDashboardImage from "../../../../image/SecondDashboard.png";

type Props = {};

const ThirdDashboard = (props: Props) => {
  return (
    <ThirdDashboardWrapper>
      <ThirdDashboardImageWrapper
        src={SecondDashboardImage}
        alt={"DashboardImage"}
        width={1023}
        height={507}
      ></ThirdDashboardImageWrapper>
    </ThirdDashboardWrapper>
  );
};

const ThirdDashboardWrapper = styled("div", {
  height: "$x128",
  backgroundColor: "$SubSecondaryBackground",
  minWidth: "$maxBound",
  display: "flex",
  justifyContent: "center",
  padding: " 0 $x32",
  "@mobile": {
    padding: " 0 $x4",
  },
});

const ThirdDashboardImageWrapper = styled(Image, {
  marginTop: "$x12",
  "@tablet": {
    width: "100%",
    height: "$x128",
  },
});
export default ThirdDashboard;
