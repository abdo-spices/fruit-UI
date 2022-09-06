import Head from "next/head";
import Util from "./md/utilities.mdx";

export default function Components() {
  return (
    <div>
      <Head>
        <title>utilities</title>
        <meta name="description" content="fruitUI" />
        <link rel="icon" type="image/png" href="/fruitUI.png" />
      </Head>
      <Util/>
    </div>
  );
}
