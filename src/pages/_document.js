import { Html, Head, Main, NextScript } from "next/document";

import { ErrorBoundary } from "react-error-boundary";
import { Script } from "next/script";
import { Helmet } from "react-helmet";

const FallBack = () => {
  return (
    <div className='flex flex-col font-Cocon font-bold'>
      <p>Si è verificato un errore inaspettato...</p>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        Ricarica
      </button>
    </div>
  );
};

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' type='image/x-icon' href='/logo-black.ico'></link>
        <link
          rel='stylesheet'
          href='https://use.typekit.net/zjg6kbh.css'
        ></link>
        <link rel='preconnect' href='https://www.googleapis.com' />
        <link rel='preconnect' href='https://apis.google.com' />
        <link rel='preconnect' href='https://firestore.googleapis.com' />
        <link rel='preconnect' href='https://identitytoolkit.googleapis.com' />
        <link rel='preconnect' href='https://whitetree-a8d34.firebaseapp.com' />

        <Helmet>
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PBFCXV3YL');
          `}
          </script>
        </Helmet>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
