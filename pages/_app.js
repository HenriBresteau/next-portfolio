import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Main from '../components/layouts/main'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}
export default Website
