import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Title,
  WorkImage,
  Meta,
  MetaB,
  MetaC
} from '../../../components/projet'
import P from '../../../components/paragraphe'

const Work = () => (
  <Layout title="FrontEndMentor">
    <Container>
      <Title>
        Frontend Mentor <Badge>2022</Badge>
      </Title>
      <P>Challenge d&apos;Ux / Ui </P>
      <P>
        Un dossier, avec les images (libre de droit), les polices, couleurs et
        taille utilisées, est fourni.
      </P>
      <P> L&apos;objectif est de se rapprocher au mieux du design demandé.</P>

      <List ml={4} my={4}>
        <ListItem>
          <P>Avoir un comportement responsive</P>
          <P>Effet hover : titre, navbar </P>
          <P>Burger Menu opérationnel</P>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Platforme</MetaB>
          <span>Google Chrome</span>
        </ListItem>
        <ListItem>
          <MetaC>Stack</MetaC>
          <span>HTML, CSS, Vanilla JS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>New Homepage</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fem-news-homepage-mobile.vercel.app/" isExternal>
            https://fem-news-homepage-mobile.vercel.app/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Github</MetaC>
          <Link
            href="https://github.com/HenriBresteau/FeM-news-homepage"
            isExternal
          >
            github.com/HenriBresteau/FeM-faq-accordion
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaB>Méthode</MetaB>
          <span>Mobile First, Flex Box, Grid</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={18} my={6}>
        <Center>Version Mobile</Center>
      </Heading>
      <WorkImage
        src="/images/projet/fem/new-mobile-home.png"
        alt="New mobile home"
      ></WorkImage>
      <Box pb={4}>
        <P>Burger Menu cliquable qui ouvre un menu spéciale mobile.</P>
      </Box>
      <WorkImage
        src="/images/projet/fem/new-mobile-menu-open.png"
        alt="New mobile menu open"
      ></WorkImage>
      <Heading as="h4" fontSize={18} my={6}>
        <Center>Version Desktop</Center>
      </Heading>
      <WorkImage
        src="/images/projet/fem/new-desktop.png"
        alt="New Desktop home"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
