import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbMarvelQuiz from '../public/images/projet/projet_marvel-quiz.png'
import thumbDolla from '../public/images/projet/projet_Dolla.png'
import thumbAvatar from '../public/images/projet/projet_avatar.png'
import thumbFrontendMentor from '../public/images/projet/projet_Order-Summary.png'
import thumbNft from '../public/images/projet/projet_nft.png'
import thumbScrimba from '../public/images/projet/projet_scrimba.png'
import Layout from '../components/layouts/article'
import { IoGameController, IoLogoReact } from 'react-icons/io5'
import { SiFrontendmentor } from 'react-icons/si'

const Projets = () => {
  return (
    <Layout title="Projets">
      <Container>
        <Heading as="h2" fontSize={24} mb={4}>
          Projets parallèles
        </Heading>
        <Heading as="h3" fontSize={20} mb={4} d="flex" alignItems="center">
          <IoLogoReact style={{ marginRight: '1rem' }} />
          REACT
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="marvel-quiz"
              title="marvel-quiz"
              thumbnail={thumbMarvelQuiz}
            >
              React app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="dolla" title="Dolla" thumbnail={thumbDolla}>
              React Styled components
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="scrimba" title="Scrimba" thumbnail={thumbScrimba}>
              Learn react
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4} d="flex" alignItems="center">
            <SiFrontendmentor style={{ marginRight: '1rem' }} /> FrontendMentor
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="frontendmentor"
              title="FrontEndMentor"
              thumbnail={thumbFrontendMentor}
            >
              Challenge Design
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="fem/card-nft"
              title="Card NFT"
              thumbnail={thumbNft}
            >
              Challenge Design
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.3}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4} d="flex" alignItems="center">
            <IoGameController style={{ marginRight: '1rem' }} /> Bac à sable
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="avatar" title="Avatar" thumbnail={thumbAvatar}>
              Avatar avec effet
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Projets
