import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../api/errhandl";
import TagManager from "react-gtm-module";
export default function App({ Component, pageProps }) {
  useEffect(() => {
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
