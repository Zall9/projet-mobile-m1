import Document, { Html, Head, Main, NextScript } from "next/document";

// Cet export sert a définir des éléments qui seront présents sur toutes les pages
// On l'utilise ici pour faire le lien avec le manifest.json pour que le navigateur sâche que c'est une PWA
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
