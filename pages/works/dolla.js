import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projet'
import P from '../../components/paragraphe'

const Work = () => (
  <Layout title="Dolla">
    <Container>
      <Title>
        Dolla <Badge>2021</Badge>
      </Title>
      <P>Application Fictive de banque</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/react/dolla/"
            isExternal
          >
            https://henribresteau.fr/side-project/react/dolla/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Styled components, Smooth Scroll</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/projet/react/dolla_01.png"
          alt="dolla homepage"
        />
        <WorkImage src="/images/projet/react/dolla_02.png" alt="dolla page" />
        <WorkImage src="/images/projet/react/dolla_03.png" alt="dolla sign" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
