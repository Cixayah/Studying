import { AboutMe } from "@/components/Home/AboutMe";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Cix</title>
        <meta name="description" content="Sou um dev junior full stack" />
      </Head>
      <div>
      <AboutMe />
      </div>
    </>
  );
}
export default Home;
