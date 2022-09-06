import Head from "next/head";
import Comps from "./md/components.mdx";

export default function Components() {
  return (
    <div>
      <Head>
        <title>components</title>
        <meta name="description" content="fruitUI" />
        <link rel="icon" type="image/png" href="/fruitUI.png" />
      </Head>
      <Comps/>
    </div>
  );
}


