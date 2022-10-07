import "@code-hike/mdx/dist/index.css";
import "../css/docs.css";

import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
