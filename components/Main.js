import Head from "next/head";
import React from "react";
import HeaderComponent from "./HeaderComponent";

const Main = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Learning Dynamic Routing</title>
        <meta name="description" content="This is the best way to go!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderComponent />
      <div>{children}</div>
    </div>
  );
};

export default Main;
