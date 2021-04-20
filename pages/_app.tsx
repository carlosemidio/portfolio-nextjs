import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import 'react-multi-carousel/lib/styles.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import 'react-notifications/lib/notifications.css';

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
