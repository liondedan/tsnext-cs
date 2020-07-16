import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../lib/theme';
import fonts from '../components/fontFace';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <script src="https://js.stripe.com/v3/"></script>
          <meta
            name="google-site-verification"
            content="QFmL1uY8dNqwQjApaLvjch6AYY7tTcvaNo-vWN-TDF8"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  // @ts-ignore
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () =>
      originalRenderPage({
        // @ts-ignore
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        <style
          dangerouslySetInnerHTML={{
            __html: `  ${fonts}`,
          }}
        />,
      ],
    };
  }
}
