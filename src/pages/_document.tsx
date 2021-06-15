import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
 
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="icons/icon-192x192.png"></link>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}