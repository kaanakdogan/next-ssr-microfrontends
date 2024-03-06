import { GlobalContextProvider } from "@/contexts/GlobalContext";
import "@/styles/globals.css";
import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
  return <GlobalContextProvider><Component {...pageProps} /></GlobalContextProvider>;
}
MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;