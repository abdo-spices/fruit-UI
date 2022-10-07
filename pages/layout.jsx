import Head from "next/head";
import Lay from "./md/layout.mdx";

export default function Layout() {
  return (
    <div>
      <Head>
        <title>layout</title>
        <meta name="description" content="fruitUI" />
        <link rel="icon" type="image/png" href="/fruitUI.png" />
      </Head>
      <Lay/>
    </div>
  );
}
