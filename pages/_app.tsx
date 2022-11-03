import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Nav from "../src/common/layouts/NavBar/Nav";
import Footer from "../src/common/layouts/Footer/Footer";
import Heading from "../src/common/components/PageHeading/Heading";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heading
        title={"SKDV"}
        keywords={"Web Developer "}
        description={"Fullstack startup"}
      />
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
