import { Html, Head, Main, NextScript } from "next/document";

import { ErrorBoundary } from "react-error-boundary";

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
        <link
          rel='stylesheet'
          href='https://use.typekit.net/zjg6kbh.css'
        ></link>
        <link rel='preconnect' href='https://www.googleapis.com' />
        <link rel='preconnect' href='https://apis.google.com' />
        <link rel='preconnect' href='https://firestore.googleapis.com' />
        <link rel='preconnect' href='https://identitytoolkit.googleapis.com' />
        <link rel='preconnect' href='https://whitetree-a8d34.firebaseapp.com' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
