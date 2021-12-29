import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#E9DDD8', '#161923')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#847979',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#58A4B0', '#FCDDBC')(props),
      testUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'calibri'
}
const colors = {
  glassTeal: '#88CCCA'
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}
const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
