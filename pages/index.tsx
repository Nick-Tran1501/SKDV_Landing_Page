// domain/
import Heading from "../src/common/components/PageHeading/Heading";
import type { NextPage } from "next";
import React from "react";
import Introduction from "../src/common/components/Introduction/Introduction";
import Companies from "../src/common/components/Companies/Companies";
import MyWork from "../src/common/components/MyWork/MyWork";
import DashBoardWrapper from "../src/common/layouts/Dashboard/DashboardWrapper";
import Description from "../src/common/components/OurDescription/Description";
const Home: NextPage = () => {
  return (
    <>
      <Introduction />

      <Companies />

      <MyWork />

      <DashBoardWrapper />

      <Description />
    </>
  );
};

export default Home;
