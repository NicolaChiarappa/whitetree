import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../api/errhandl";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

import { useRouter } from "next/router";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-8PBFCXV3YL" });
  }, []);
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1389151521669261");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <div>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </ErrorBoundary>
    </div>
  );
}
