import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB, MetaC } from '../../components/projet'
import P from '../../components/paragraphe'

const Work = () => (
  <Layout title="Avatar">
    <Container>
      <Title>
        Avatar <Badge>2021</Badge>
      </Title>
      <P>Effets sur une image en fonction du positionnement de la souris</P>

      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Platforme</MetaB>
          <span>Google Chrome</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link
              href="/links/side-project/bac-a-sable/avatar/index.html"
            isExternal
          >
            https://henribresteau.fr/links/side-project/bac-a-sable/avatar/index.html
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <MetaC>Stack</MetaC>
          <span>JS, Parcel</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projet/bac-a-sable/avatar_02.png"
        alt="avatar"
      ></WorkImage>
      <WorkImage
        src="/images/projet/bac-a-sable/avatar_01.png"
        alt="avatar"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
