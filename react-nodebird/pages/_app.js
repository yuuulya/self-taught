import React from "react";
import PropType from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropType.elementType.isrequird,
};

export default App;
