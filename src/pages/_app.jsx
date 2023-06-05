import "../styles/global.css";
import CustomCursor from "../component/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CustomCursor />
    </>
  );
}
