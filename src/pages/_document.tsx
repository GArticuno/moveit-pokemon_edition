import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta property="og:title" content="Move.it"/>
          <meta property="og:description" content="Se mantenha saudável na frente do computador."/>
          <meta property="og:image" content="https://i.pinimg.com/originals/f9/05/d2/f905d2c66b32604817eb3f0f9b4e82c0.jpg"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}