import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
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
      <P> L&apos;objectif est de se rapprocher au mieux du design demandé</P>

      <List ml={4} my={4}>
        <ListItem>
          <P>Effet hover : image, titre, créateur </P>
          <P>Utilisations des props en React </P>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Platforme</MetaB>
          <span>Google Chrome</span>
        </ListItem>
        <ListItem>
          <MetaC>Stack</MetaC>
          <span>React, Style Components</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>FAQ</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fem-faq-accordion-hb.vercel.app/" isExternal>
            https://fem-faq-accordion-hb.vercel.app/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Github</MetaC>
          <Link
            href="https://github.com/HenriBresteau/FeM-faq-accordion"
            isExternal
          >
            github.com/HenriBresteau/FeM-faq-accordion
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaB>Méthode</MetaB>
          <span>Mobile First, Flex Box</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/fem/faq-mobile.png"
        alt="faq mobile"
      ></WorkImage>
      <WorkImage
        src="/images/projet/projet_faq.png"
        alt="faq desktop"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
