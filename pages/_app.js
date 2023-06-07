import "../styles/globals.css";
import Layout from "../layouts/layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
