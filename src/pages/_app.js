import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../api/errhandl";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </ErrorBoundary>
    </div>
  );
}
