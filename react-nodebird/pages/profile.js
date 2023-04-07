import React from "react";
import Applayout from "../components/Applayout";
import Head from "next/dist/next-server/lib/head";

const profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>내 프로필 | nodebird</title>
      </Head>
      <Applayout>프로필</Applayout>
    </>
  );
};

export default profile;
