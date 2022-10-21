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
        Tesla Tailwind <Badge>2022</Badge>
      </Title>
      <P>Clone du site de tesla en utilisant tailwind</P>

      <List ml={4} my={4}>
        <ListItem>
          <P>Effet du menu en format mobile</P>
          <P>Scroll-snap sur les sections </P>
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
          <span>React, Tailwind css, headlessUi</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>NFT preview card</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tesla-tailwind-hb.vercel.app/" isExternal>
            https://tesla-tailwind-hb.vercel.app/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Github</MetaC>
          <Link
            href="https://github.com/HenriBresteau/tesla-tailwind"
            isExternal
          >
            github.com/HenriBresteau/tesla-tailwind
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/tesla/tesla_menu.png"
        alt="tesla menu open"
      ></WorkImage>
      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Menu</MetaB>
          <span>Animation d&apos;entrée, flou sur le côté</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/tesla/tesla_menu-open.png"
        alt="tesla menu open"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
