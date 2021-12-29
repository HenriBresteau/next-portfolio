import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projet'

import P from '../../components/paragraphe'

import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dyma">
    <Container>
      <Title>
        Dyma <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        Application en Vue.js <br />
        Boutique, Tri, Panier automatisé. <br />
        Onglet Admin : ajouter un nouveau objet, traitement du formulaire,
        lien avec une BDD firebase
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/vue/dyma/"
            isExternal
          >
            https://henribresteau.fr/side-project/vue/dyma/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js, Firebase</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/vue/dyma_01.png"
        alt="dyma Home"
      ></WorkImage>
      <WorkImage
        src="/images/projet/vue/dyma_03.png"
        alt="dyma Cart"
      ></WorkImage>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Onglet Admin</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <P>Peut prendre une url</P>
        </ListItem>

        <ListItem>
          <P>
            Traitement du formulaire avec les toutes les informations requises
          </P>
        </ListItem>
        <ListItem>
          <P>Insertion dans une BDD firebase</P>
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/projet/vue/dyma_02.png"
        alt="vivino Admin"
      ></WorkImage>
    </Container>
  </Layout>
)
export default Work
