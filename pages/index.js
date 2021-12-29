import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Paragraphe from '../components/paragraphe'
import Section from '../components/section'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import thumbMarvelQuiz from '../public/images/projet/projet_marvel-quiz.png'
import thumbFrontendMentor from '../public/images/projet/projet_Order-Summary.png'
import {
  IoBook,
  IoCodeSlash,
  IoCube,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import { Meta, MetaB, MetaC } from '../components/projet'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="0.5rem"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, Je suis développeur Web à Lyon !
        </Box>

        <Box display={{ md: 'flex' }} alignItems={{ md: 'center' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" fontSize="2.5rem">
              Henri Bresteau
            </Heading>
            <p>Developpeur Web ( Front - UX/UI )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              maxWidth="200px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            A propos
          </Heading>
          <Paragraphe>
            Passionné par le domaine du web, je suis développeur depuis
            maintenant 2 ans orienté Front-end. <br />
            Je cherche actuellement à rejoindre une équipe autour d’un projet
            qui me permettra d&apos;évoluer professionnellement.
          </Paragraphe>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Expériences
          </Heading>
          <BioSection>
            <BioYear>2019</BioYear>
            Formation Openclassrooms Développeur Web Junior.
            <Box align="center" my={4}>
              <NextLink href="/ocr">
                <Button
                  rightIcon={<ChevronRightIcon></ChevronRightIcon>}
                  colorScheme="teal"
                >
                  Mon parcours
                </Button>
              </NextLink>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Stage (3 mois) en tant que Développeur Web Junior chez{' '}
            <Link href="https://studio218.fr/" target="_blank">
              Studio218
            </Link>{' '}
            : <br />
            Modernisation d&apos;un CRM. <br />
            Création et mises à jour de site sous Wordpress. <br />
            SEO - Optimisations d’image - Respect W3C
          </BioSection>
          <BioSection>
            <BioYear>Mars 2020 à Octobre 2021</BioYear>
            Développeur Full-stack chez{' '}
            <Link href="https://mediamarket-pub.com/" target="_blank">
              Mediamarket
            </Link>{' '}
            : <br />
            Réalisation de site à partir de maquettes. <br />
            Mises à jour et optimisations de sites existants. <br />
            Interventions techniques sur matériels informatiques.
          </BioSection>
          <BioSection>
            <BioYear>2019 à 2021</BioYear>
            Développeur Indépendant :
            <Box align="center" my={4}>
              <NextLink href="/projets">
                <Button
                  rightIcon={<ChevronRightIcon></ChevronRightIcon>}
                  colorScheme="teal"
                >
                  Mes projets parallèles
                </Button>
              </NextLink>
            </Box>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Stack
          </Heading>
          <List ml={4} my={4}>
            <ListItem my={4} d="flex">
              <Heading
                as="h4"
                fontSize={16}
                d="flex"
                alignItems="center"
                mr={4}
              >
                <IoCodeSlash style={{ marginRight: '0.5rem' }} fontSize={20} />
                Languages :
              </Heading>
              <MetaB>HTML 5</MetaB>
              <Meta>CSS 3</Meta>
              <MetaC>Javascript es6</MetaC>
              <MetaB>PHP 7</MetaB>
            </ListItem>
            <ListItem my={4} d="flex">
              <Heading
                as="h4"
                fontSize={16}
                d="flex"
                alignItems="center"
                mr={4}
              >
                <IoBook style={{ marginRight: '0.5rem' }} fontSize={20} />
                Framework :
              </Heading>
              <MetaB>React</MetaB>
              <Meta>Vue.Js</Meta>
            </ListItem>
            <ListItem my={4} d="flex">
              <Heading
                as="h4"
                fontSize={16}
                d="flex"
                alignItems="center"
                mr={4}
              >
                <IoCube style={{ marginRight: '0.5rem' }} fontSize={20} />
                CMS / Bundler :
              </Heading>
              <MetaB>WordPress</MetaB>
              <MetaC>Parcel</MetaC>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Outils
          </Heading>
          <Paragraphe> Visual Studio Code, Github, NPM, Figma </Paragraphe>
        </Section>
        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraphe>Jeu vidéo, Musique, Tennis, Moka </Paragraphe>
        </Section>
        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Me contacter
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/HenriBresteau" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub}></Icon>}
                >
                  @HenriBresteau
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/henri-bresteau/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin}></Icon>}
                >
                  @henri-bresteau
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mail:henri.bresteau@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMailOutline}></Icon>}
                >
                  henri.bresteau@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={1.2}>
          <Heading as="h3" variant="section-title">
            Mes derniers Projets
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6} pt={2}>
            <GridItem
              href="works/marvel-quiz"
              title="marvel-quiz"
              thumbnail={thumbMarvelQuiz}
            >
              React app
            </GridItem>
            <GridItem
              href="works/frontendmentor"
              title="FrontendMentor"
              thumbnail={thumbFrontendMentor}
            >
              Order Summary
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
