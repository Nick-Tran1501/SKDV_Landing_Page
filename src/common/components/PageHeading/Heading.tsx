import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Heading: React.FC<Props> = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <link rel="shortcut icon" href="/logo.png" />

      <title>{title}</title>
    </Head>
  );
};

export default Heading;
