import { Layout } from "components/Shared";
import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "store";

function MyApp({ Component, pageProps }) {
  const prefix = process.env.NODE_ENV === 'production' ? '': '';
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
