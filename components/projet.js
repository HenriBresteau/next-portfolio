import NextLink from 'next/link'
import { Box, Heading, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projets">
      <Link>Projets</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)
export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}></Image>
)
export const LogoImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="auto"
    margin="0 auto"
    src={src}
    alt={alt}
    mb={4}
  ></Image>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
export const MetaB = ({ children }) => (
  <Badge colorScheme="blue" mr={2}>
    {children}
  </Badge>
)
export const MetaC = ({ children }) => (
  <Badge colorScheme="orange" mr={2}>
    {children}
  </Badge>
)
