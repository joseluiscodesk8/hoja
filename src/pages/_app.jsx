import "../styles/global.scss";
import CustomCursor from "../component/CustomCursor";
import Layout from "../layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
     <Layout>
       <Component {...pageProps} />
      <CustomCursor />
     </Layout>
    </>
  );
}
