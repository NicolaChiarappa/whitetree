import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../api/errhandl";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

import { useRouter } from "next/router";
import Router from "next/router";

import Script from "next/script";
import Head from "next/head";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log(GA_MEASUREMENT_ID);
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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </ErrorBoundary>
    </>
  );
}
