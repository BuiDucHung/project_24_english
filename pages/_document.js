import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Render the page with Material-UI and styled-components styles
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheets.collect(<App {...props} />),
        enhanceComponent: (Component) => (props) =>
          sheet.collectStyles(<Component {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Add Material-UI and styled-components styles to the initial props
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        sheet.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="icon" type="image/png" href="https://ngoaingu24h.vn/images/icon/nn24h/favicon.png" />
          <link rel="apple-touch-icon" href="https://ngoaingu24h.vn/images/icon/nn24h/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
