import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Oooups!</Heading>
      <Text> Cette page n&apos;existe pas. </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retour à la case départ</Button>
        </NextLink>
      </Box>
    </Container>
  )
}
export default NotFound
