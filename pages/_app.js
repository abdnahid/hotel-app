import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
      <Footer />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
