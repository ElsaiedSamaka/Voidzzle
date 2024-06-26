/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="../../favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="NextJS integration with Redux Observable."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://4.bp.blogspot.com/-mjqhWWOAQ4k/YHGCZ8vh16I/AAAAAAAAMk4/ciGAb0cebQkuXMS_2y_r_BIa20aaXgoYgCK4BGAYYCw/s1600/Artboard%2B1.png"
          />
          <meta
            property="og:title"
            content="NextJS Redux Observable Integration | Czetsuya Tech"
          />
          <meta
            property="og:description"
            content="NextJS integration with Amazon Cognito."
          />
          <meta property="og:url" content="https://czetsuyatech.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
