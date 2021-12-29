import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB } from '../../components/projet'

import P from '../../components/paragraphe'

import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Marvel Quiz">
    <Container>
      <Title>
        Marvel Quiz <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        Application en React Js. <br />
        Systeme d&apos;inscription et de connexion.<br />
        Quiz avec progression et score sur 3 niveaux.  <br />
        Récapitulatif des bonnes réponses entre les manches
        - Retenter le niveau si trop de mauvaises réponses.{' '}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://henribresteau.fr/side-project/react/marvel-quiz/"
            isExternal
          >
            https://henribresteau.fr/side-project/react/marvel-quiz/
            <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase, Marvel Api, Axios</span>
        </ListItem>
        <ListItem>
          <MetaB>React library</MetaB>
          <span>Icons, Router Dom, Toastify, Tooltip</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projet/react/marvel-quiz_01.png"
        alt="Marvel Quiz Home"
      ></WorkImage>
      <WorkImage
        src="/images/projet/react/marvel-quiz_02.png"
        alt="Marvel Quiz Page"
      ></WorkImage>
      <WorkImage
        src="/images/projet/react/marvel-quiz_03.png"
        alt="Marvel Quiz Résultat"
      ></WorkImage>
    </Container>
  </Layout>
)
export default Work
