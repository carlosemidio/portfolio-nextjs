import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/icon.png" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="description" content="Desenvolvedor web freelancer" />
          <meta
            name="keywords"
            key="keywords"
            content="carlos,emidio,emídio,freelancer,web,php,node,react,reactjs,laravel,sistema,sistemas"
          />
          <meta name="author" content="Carlos Emídio" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="Carlos Emídio" key="twhandle" />

          {/* Open Graph */}
          <meta property="OG TAG" content="VALOR" />
          <meta property="og:title" content="Carlos Emídio" />
          <meta property="og:image" content="/perfil.png" />
          <meta property="og:image:type" content="image/*" />
          <meta
            property="og:description"
            content="Desenvolvedor web freelancer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.carlosemidio.com.br/" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Carlos Emídio" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="preload" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
