import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../api/errhandl";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
export default function App({ Component, pageProps }) {
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  useEffect(() => {
    ReactPixel.init("1389151521669261", options);
    ReactPixel.pageView();

    TagManager.initialize({ gtmId: "G-8PBFCXV3YL" });
  }, []);
  return (
    <div>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </ErrorBoundary>
    </div>
  );
}
