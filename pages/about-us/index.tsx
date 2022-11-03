import React from "react";
import Introduction from "../../src/common/components/AboutComponents/Introduction/Introduction";
import ImageGallery from "../../src/common/components/AboutComponents/ImageGallery/ImageGallery";
import Description from "../../src/common/components/OurDescription/Description";
import Quality from "../../src/common/components/AboutComponents/Quality/Quality";
import Cooperator from "../../src/common/components/AboutComponents/Cooperator/Cooperator";
import Ability from "../../src/common/components/AboutComponents/Ability/Ability";
type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <>
      <Introduction />
      <ImageGallery />
      <Quality />
      <Cooperator />
      <Ability />
      <Description />
    </>
  );
};

export default AboutUsPage;
