import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="We focus on providing technology that helps companies to track,
            document and achieve their sustainability efforts."
          />
          <meta
            property="og:title"
            content="Taka. Documenting Climate Action in Africa."
          />
          <meta property="og:url" content="https://www.taka.earth" />
          <meta property="og:image" content="assets/logo.js" />
          <meta
            name="twitter:title"
            content="Taka. Documenting Climate Action in Africa."
          />
          <meta
            name="twitter:description"
            content="We focus on providing technology that helps companies to track,
            document and achieve their sustainability efforts."
          />
          <meta name="twitter:image" content="assets/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="keywords"
            content="recycle waste rewards offers discounts kenya"
          />
        </Head>
        <body>
          <div id="loader" className="h-screen w-full fixed bg-teal-600 z-50 flex justify-center items-center">
            <h1 className="text-5xl text-white font-bold uppercase">Taka Earth</h1>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
