import Footer from "@/Components/Footer";
import Hedder from "@/Components/Hedder";
import { wrapper } from "@/Redux/Store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  const { store, porps } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Hedder />
      <Component {...porps} />
      <Footer />
    </Provider>
  );
}

export default wrapper.withRedux(App);
