import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB, MetaC } from '../../components/projet'
import P from '../../components/paragraphe'

const Work = () => (
  <Layout title="FrontEndMentor">
    <Container>
      <Title>
        Tragehosor <Badge>2022</Badge>
      </Title>
      <P>
        A l&apos;occasion des fêtes de noël j&apos;ai créer ce mini site pour
        tirer au sort le thème du cadeau et qui offre à qui.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <P>Tirage au sort d&apos;un thème donné</P>
          <P>Animation sur le cadeau, JSConfetti avec l&apos;emoji</P>
          <P>Coder en mobile first</P>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Platforme</MetaB>
          <span>Google Chrome</span>
        </ListItem>
        <ListItem>
          <MetaC>Stack</MetaC>
          <span>React, Tailwind CSS</span>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tyragehosor.vercel.app/" isExternal>
            https://tyragehosor.vercel.app/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Github</MetaC>
          <Link href="https://github.com/HenriBresteau/tyragehosor" isExternal>
            github.com/HenriBresteau/tyragehosor
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Thèmes</Center>
      </Heading>
      <WorkImage
        src="/images/projet/tyragehosor/themes.png"
        alt="tesla menu open"
      ></WorkImage>
      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Input</MetaB>
          <span>Commence avec un emoji</span>
        </ListItem>
        <ListItem>
          <MetaC>Vue des Themes</MetaC>
          <span>Possibilité de les supprimer</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={18} my={6}>
        <Center>KiDonneAKi</Center>
      </Heading>
      <WorkImage
        src="/images/projet/tyragehosor/kidonneaki.png"
        alt="tesla menu open"
      ></WorkImage>
      <List ml={4} my={4}>
        <ListItem>
          <MetaC>Vue des Themes</MetaC>
          <span>Possibilité de les supprimer</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
