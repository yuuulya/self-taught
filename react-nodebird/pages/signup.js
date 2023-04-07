import React from "react";
import Applayout from "../components/Applayout";
import Head from "next/dist/next-server/lib/head";

const singup = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>회원가입 | nodebird</title>
      </Head>
      <Applayout>회원가입</Applayout>
    </>
  );
};

export default singup;
