import React from "react";
import Introduction from "../../src/common/components/ContactComponents/Introduction/Introduction";
import ProjectIdea from "../../src/common/components/ContactComponents/ProjectIdea/ProjectIdea";
type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <Introduction />
      <ProjectIdea />
    </>
  );
};

export default ContactPage;
