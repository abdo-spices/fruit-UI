import Head from "next/head";
import Intro from "./intro.mdx";
import Config from "./config.mdx";
import Image from "next/image"
import Htmlcode from "./html.mdx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>fruit UI</title>
        <meta name="description" content="fruitUI" />
        <link rel="icon" type="image/png" href="/fruitUI.png" />
      </Head>
      <div className="stage anim-slide-right anim-break">
        <h1 className="font-xxxl text-gray-900 text-center mt-12">FruitUI a moduler styling framework </h1>
        <p className="text text-center"><a className="link" href="https://forms.gle/ihDprgoWNfEo2GwQ6">give us your feedback</a> </p>
        <Intro />
        <Config />
        <p className="text line-height">this will work just if using a module bundler or a javascript framework  
        but if are using html or project that uses html as main file you can import from <kbd className="black p-3 br-sm">node_modules/spices-fruitui</kbd>  </p>
        <br />
        <br />
        <Image src="/css.png" width={253} height={477} />
        <Image src="/js.png" width={380} height={230} />
        
        <Htmlcode />
      </div>
    </div>
  );
}


