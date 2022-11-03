import React from "react";
import { styled } from "../../../../design/stitches.config";
import Image from "next/future/image";
import DashboardImage from "../../../../image/Dashboard.png";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DashboardWrapper>
      <ImageContainer
        src={DashboardImage}
        alt={"Dashboard"}
        width={1022}
        height={547}
      />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled("div", {
  width: "100%",
  height: "$x128",
  background: "$SecondaryBackground",
  display: "flex",
  justifyContent: "center",
  padding: "0 $x32",
  "@tablet": {
    padding: "0 $x10",
  },
  "@mobile": {
    padding: "0 $x4",
  },
});

const ImageContainer = styled(Image, {
  marginTop: "$x10",
  filter:
    "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
  "@tablet": {
    width: "100%",
    height: "$x128",
  },
  "@mobile": {
    // height: "$x80",
  },
});

export default Dashboard;
