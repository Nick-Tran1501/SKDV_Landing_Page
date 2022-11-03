import React from "react";
import { styled } from "../../../design/stitches.config";
import Dashboard from "../../components/DashboardWrapper/Dashboard/Dashboard";
import Pleasure from "../../components/DashboardWrapper/Pleasure/Pleasure";
import SecondDashboard from "../../components/DashboardWrapper/SecondDashboard/SecondDashboard";
import DashboardImageOne from "../../../image/Dashboard.png";
import ThirdDashboard from "../../components/DashboardWrapper/ThirdDashboard/ThirdDashboard";
type Props = {};

const DashboardWrapper = (props: Props) => {
  return (
    <DashBoardWrapper>
      <Dashboard />
      <SecondDashboard />
      <Pleasure />
      <ThirdDashboard />
    </DashBoardWrapper>
  );
};

const DashBoardWrapper = styled("div", {
  backgroundColor: "$AppBackground",
  height: "auto",
  minWidth: "$maxBound",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$x40",
  paddingBottom: "$x10",
});

export default DashboardWrapper;
