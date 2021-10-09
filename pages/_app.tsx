import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from '../styles/globals';
import 'react-multi-carousel/lib/styles.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import 'react-notifications/lib/notifications.css';
import { lightTheme, darkTheme } from '../styles/themes';


function App({ Component, pageProps }: AppProps) {
  const themeConfig = lightTheme;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
