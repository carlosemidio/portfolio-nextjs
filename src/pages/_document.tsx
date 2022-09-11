import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="pt">
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="preload" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument