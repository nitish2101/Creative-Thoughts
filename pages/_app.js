import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Layout from "../Components/layout";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  );
}
