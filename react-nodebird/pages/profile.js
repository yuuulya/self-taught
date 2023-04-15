import React from "react";
import Applayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

import Head from "next/dist/next-server/lib/head";

const profile = () => {
  const followerList = [
    { nickname: "yul" },
    { nickname: "hellow" },
    { nickname: "bye" },
  ];
  const followingList = [
    { nickname: "yul2" },
    { nickname: "hellow2" },
    { nickname: "bye2" },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>내 프로필 | nodebird</title>
      </Head>
      <Applayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </Applayout>
    </>
  );
};

export default profile;
