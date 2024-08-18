import Footer from "@/Components/Footer";
import Hedder from "@/Components/Hedder";
import { wrapper } from "@/Redux/Store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Hedder />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(App);
