import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Se mantenha saudável na frente do computador."/>

          <meta property="og:title" content="Move.it(Pokemon edition)"/>
          <meta property="og:description" content="Se mantenha saudável na frente do computador."/>
          <meta property="og:image" content="https://i.pinimg.com/originals/f9/05/d2/f905d2c66b32604817eb3f0f9b4e82c0.jpg"/>
           
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="icons/icon-192x192.png"></link>
          <meta name="theme-color" content="#8244b4"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}