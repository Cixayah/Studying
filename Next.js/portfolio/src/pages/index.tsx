import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Cix</title>
        <meta name="description" content="Página inicial do site" />
      </Head>
      <main>
        <h1>Hello World, com Next.JS! xD</h1>
        <Link href="/contatos">Ir para a página de contatos</Link>
      </main>
    </>
  );
}
export default Home;
