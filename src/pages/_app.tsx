import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'react-notifications/lib/notifications.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-image-lightbox/style.css';

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
      <Component {...pageProps} />
    </>
  );
}

export default App;
