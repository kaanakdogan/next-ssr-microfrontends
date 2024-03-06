import "@/styles/globals.css";
import { GlobalContextProvider } from 'home/context';
export default function App({ Component, pageProps }) {
  return <GlobalContextProvider><Component {...pageProps} /></GlobalContextProvider>;
}
