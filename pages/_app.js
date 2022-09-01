import "@code-hike/mdx/dist/index.css";
import "../fruitUI/dist/css/fruitUI.css";
import {Navbar} from "../fruitUI/dist/js/fruitUI.js";
import { useEffect } from "react";
import Layout from "./components/Layout";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Navbar();
  },);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
