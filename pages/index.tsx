import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <Login />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <Head>
        <title>metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I already logged in </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
