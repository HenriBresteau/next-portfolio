import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB } from '../../components/projet'

import P from '../../components/paragraphe'

import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Huish">
    <Container>
      <Title>
        Huish <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        Premiere application en Vue.js <br />
        Systeme de panier : Calcul Automatique.<br /> 
        Ajouts / Retrait d&apos;objets <br />
        Possibilité de mettre un Like : notification d&apos;un Like dans la
        navbar. <br />
        Tri par recherche
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/vue/Vue-Huish/#/"
            isExternal
          >
            https://henribresteau.fr/side-project/vue/Vue-Huish/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js CDN, CSS</span>
        </ListItem>
        <ListItem>
          <MetaB>Utilisation</MetaB>
          <span>Fake Boutique</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/vue/huish_01.png"
        alt="Huish Home"
      ></WorkImage>
      <WorkImage
        src="/images/projet/vue/huish_02.png"
        alt="Huish Like"
      ></WorkImage>
      <WorkImage
        src="/images/projet/vue/huish_03.png"
        alt="Huish Cart"
      ></WorkImage>
    </Container>
  </Layout>
)
export default Work
