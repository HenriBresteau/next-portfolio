import Logo from './logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoAttach } from 'react-icons/io5'

const LinkItem = ({ href, path, children, _target, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={1}>
            <Logo></Logo>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/ocr" path={path}>
            Openclassrooms
          </LinkItem>

          <LinkItem href="/projets" path={path}>
            Projets parallèles
          </LinkItem>
          <LinkItem
            href="/links/cv/CV_HB_2022_DevFront.pdf"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 6 }}
            pr={2}
          >
            CV
            <IoAttach size="1.25rem" />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>A propos</MenuItem>
                </NextLink>
                <NextLink href="/ocr" passHref>
                  <MenuItem as={Link}> Openclassrooms </MenuItem>
                </NextLink>
                <NextLink href="/projets" passHref>
                  <MenuItem as={Link}>Projets parallèles</MenuItem>
                </NextLink>
                <NextLink href="/links/cv/CV_HB_2022_DevFront.pdf" passHref>
                  <MenuItem
                    as={Link}
                    href="/links/cv/CV_HB_2022_DevFront.pdf"
                    target="_blank"
                    download="CV_Henri_Bresteau_DevFront"
                    icon={<ExternalLinkIcon />}
                  >
                    CV
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
