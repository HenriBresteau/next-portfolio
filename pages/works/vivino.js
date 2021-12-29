import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projet'

import P from '../../components/paragraphe'

import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Huish">
    <Container>
      <Title>
        Vivino <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        Application en Vue.js <br />
        Tri par recherche input <br />
        Tri par pays bouton select
        <br />
        Tri par pays bouton radio
        <br />
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/vue/vivino/"
            isExternal
          >
            https://henribresteau.fr/side-project/vue/vinino/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js CDN, PHP MVC, SQL</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/vue/vivino_01.png"
        alt="vivino Home"
      ></WorkImage>
      <WorkImage
        src="/images/projet/vue/vivino_02.png"
        alt="vivino Like"
      ></WorkImage>
      <WorkImage
        src="/images/projet/vue/vivino_03.png"
        alt="vivino Cart"
      ></WorkImage>
    </Container>
  </Layout>
)
export default Work
