import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB, MetaC } from '../../components/projet'
import P from '../../components/paragraphe'

const Work = () => (
  <Layout title="FrontEndMentor">
    <Container>
      <Title>
        Frontend Mentor <Badge>2021</Badge>
      </Title>
      <P>Challenge d&apos;Ux / Ui </P>
      <P>
        Un dossier, avec les images (libre de droit), les polices, couleurs et
        taille utilisées, est fourni.
      </P>
      <P> L&apos;objectif est de se rapprocher au mieux du design demandé</P>

      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Platforme</MetaB>
          <span>Google Chrome</span>
        </ListItem>
        <ListItem>
          <MetaC>Stack</MetaC>
          <span>HTML, CSS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Stats Preview Card</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/bac-a-sable/Frontend-Mentor/stats-preview-card/"
            isExternal
          >
            https://henribresteau.fr/side-project/bac-a-sable/Frontend-Mentor/stats-preview-card/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Méthode</MetaC>
          <span>Mobile First, Flex Box</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/bac-a-sable/frontendMentor_01.png"
        alt="order summary"
      ></WorkImage>
      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Responsive Design</MetaB>
          <span>Format supérieur à 1440px de large</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/bac-a-sable/frontendMentor_02.png"
        alt="order summary"
      ></WorkImage>
      <Divider />
      <Heading as="h4" fontSize={18} my={6}>
        <Center>Order Summary</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/bac-a-sable/Frontend-Mentor/order-summary/"
            isExternal
          >
            https://henribresteau.fr/side-project/bac-a-sable/Frontend-Mentor/order-summary/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Méthode</MetaC>
          <span>Mobile First, Flex Box, Animation Hover Bouton</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/bac-a-sable/frontendMentor_03.png"
        alt="order summary"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
