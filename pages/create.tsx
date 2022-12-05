import Head from "next/head";
import CreateTeam from "../components/organisms/CreateTeam";

export default function Create() {
  return (
    <>
      <Head>
        <title>Meet Up | チーム作成</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateTeam />
    </>
  );
}