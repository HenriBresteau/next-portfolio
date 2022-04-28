import {
  Container,
  Badge,
  Box,
  Link,
  List,
  ListItem,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB, MetaC } from '../../components/projet'

import P from '../../components/paragraphe'

import Layout from '../../components/layouts/article'
import Paragraphe from '../../components/paragraphe'

const Work = () => (
  <Layout title="Scrimba">
    <Container>
      <Title>
        Scrimba <Badge>2022</Badge>
      </Title>
      <P>
        <Link href="https://scrimba.com/learn/learnreact" target="_blank">
          Parcours Learn React for free :
        </Link>
        <br />
        &quot;Apprenez les bases de React moderne en résolvant plus de 140 codes
        interactifs défis et construire huit projets amusants.&quot; <br />
        Tous les projets ont été fait à partir de npm create-react-app. Scrimba
        nous fournit un lien figma pour le design, ce qui nous permet de nous
        concenter sur la logique de l&apos;application.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <MetaB>Stack</MetaB>
          <span>React, Figma</span>
        </ListItem>
      </List>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h4" fontSize={18} mb={4} variant="section-title">
                my travel journal.
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Paragraphe>
              Découverte de React à travers un site statique. <br />
              Données sous forme de tableau dans un fichier js séparé : <br />
              Titre, Location, Lien Google maps, Dates, description et image URL{' '}
              <br />
            </Paragraphe>
            <List ml={4} my={4}>
              <ListItem>
                <Meta>Online</Meta>
                <Link
                  href="https://scrimba-travel-journal.vercel.app/"
                  isExternal
                >
                  https://scrimba-travel-journal.vercel.app/
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaC>Github</MetaC>
                <Link
                  href="https://github.com/HenriBresteau/scrimba-travel-journal"
                  isExternal
                >
                  github.com/HenriBresteau/scrimba-travel-journal
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaB>Focus</MetaB>
                <span>Props, fonction map()</span>
              </ListItem>
            </List>
            <WorkImage
              src="/images/projet/scrimba/my_travel_journal.png"
              alt="my travel journal"
            ></WorkImage>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h4" fontSize={18} mb={4} variant="section-title">
                AirBnB Experiences
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Paragraphe>
              Clone AirBnb. <br />
              Card Component <br />
              Données sous forme de tableau dans un fichier js séparé : <br />
              Titre, Description, Prix, Stats - Notes - Avis, Localisation,
              Quantité en stock <br />
              Affichage conditionnel sur les quantités en stock : Sold out ou
              Online
            </Paragraphe>
            <List ml={4} my={4}>
              <ListItem>
                <Meta>Online</Meta>
                <Link href="https://scrimba-airbnb.vercel.app/" isExternal>
                  https://scrimba-airbnb.vercel.app/
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaC>Github</MetaC>
                <Link
                  href="https://github.com/HenriBresteau/scrimba-airbnb"
                  isExternal
                >
                  github.com/HenriBresteau/scrimba-airbnb
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaB>Focus</MetaB>
                <span>Props, Card Component, Conditionnal Rendering</span>
              </ListItem>
            </List>
            <WorkImage
              src="/images/projet/scrimba/AirBnb_Experiences.png"
              alt="AirBnB expriences"
            ></WorkImage>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h4" fontSize={18} mb={4} variant="section-title">
                Meme Generator
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Paragraphe>
              Générateur de Meme <br />
              Importance du State en React : initialisation, update ...
              <br />
              Affichage conditionnel : opérateur logique ou ternaire. <br />
              Découverte des Formulaires en React <br />
              Appel d&apos;une API distante <br />
            </Paragraphe>
            <List ml={4} my={4}>
              <ListItem>
                <Meta>Online</Meta>
                <Link
                  href="https://scrimba-meme-generator.vercel.app/"
                  isExternal
                >
                  https://scrimba-meme-generator.vercel.app/
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaC>Github</MetaC>
                <Link
                  href="https://github.com/HenriBresteau/scrimba-meme-generator"
                  isExternal
                >
                  github.com/HenriBresteau/scrimba-meme-generator
                  <ExternalLinkIcon mx="2px"> </ExternalLinkIcon>
                </Link>
              </ListItem>
              <ListItem>
                <MetaB>Focus</MetaB>
                <span>State, Form, API</span>
              </ListItem>
            </List>
            <WorkImage
              src="/images/projet/scrimba/Meme_Generator.png"
              alt="AirBnB expriences"
            ></WorkImage>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
)
export default Work
