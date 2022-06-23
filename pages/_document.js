import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <script
          src="https://integrations.missiveapp.com/missive.js"
          defer
        ></script>

        <link
          href="https://integrations.missiveapp.com/missive.css"
          rel="stylesheet"
        ></link>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
