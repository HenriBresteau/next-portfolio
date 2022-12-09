import {
  Container,
  Heading,
  Divider,
  Box,
  Button,
  List,
  ListItem,
  UnorderedList,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { Meta, MetaB, MetaC } from '../components/projet'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraphe from '../components/paragraphe'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Ocr = () => {
  return (
    <Layout title="Openclarooms">
      <Container>
        <Heading as="h2" fontSize={28} mb={4}>
          Openclassrooms
        </Heading>
        <Section>
          <Heading as="h3" variant="section-title">
            Parcours
          </Heading>
          <Paragraphe style={{ marginBottom: '2rem' }}>
            Le parcours contient 5 grandes étapes, de la base HTML/CSS, en
            passant par le JavaScript, PHP en finissant par un stage dans une
            entreprise.
          </Paragraphe>
          <Paragraphe style={{ marginBottom: '2rem' }}>
            Pour réaliser ces projets des cours avec des quiz, des mises en
            pratiques dans une activité ciblé, nous permettent de comprendre les
            concepts des différents langages pour aborder les problèmatiques des
            projets.
          </Paragraphe>
          <Paragraphe style={{ marginBottom: '2rem' }}>
            À la fin du projet, nous devons présenter notre application devant
            un jury avec un support de présentation dans un contexte
            professionnel.
          </Paragraphe>
          <Divider my={6} />
        </Section>

        <Heading as="h2" fontSize={28} mb={4}>
          Projets
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" fontSize={20} mb={4} variant="section-title">
                  Projet 1 - WebAgency
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Paragraphe>
                Site vitrine pour une agence du Web. Intégration à partir d’une
                maquette graphique.
              </Paragraphe>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>HTML, CSS</span>
                </ListItem>
                <ListItem>
                  <MetaB>Notes</MetaB>
                  <span style={{ fontStyle: 'italic' }}>
                    Premier projets en tant que developeur
                  </span>
                  <Box align="center" my={4}>
                    <Link href="/links/ocr/p1/index.html" isExternal>
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                      >
                        Web Agency
                      </Button>
                    </Link>
                  </Box>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" fontSize={20} mb={4} variant="section-title">
                  Projet 2 - Strasbourg
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Paragraphe>
                La ville de Strasbourg souhaite moderniser son site pour faire
                apparaitre les actualités, les activités du mois et retrouver
                les informations pratiques de la ville.
              </Paragraphe>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>Wordpress, CSS</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>Flag</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem> Utilisation du CMS Wordpress.</ListItem>
                      <ListItem> Mise en place du principe du SEO </ListItem>
                      <ListItem>
                        Notion d’accessibilité du site RGAA Animation CSS 3
                      </ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  <MetaB>Notes </MetaB>
                  <span style={{ fontStyle: 'italic' }}>
                    Découverte de Wordpress
                  </span>
                  <Box align="center" my={4}>
                    <Link href="http://s769532781.onlinehome.fr/" isExternal>
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                      >
                        Strasbourg
                      </Button>
                    </Link>
                  </Box>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" fontSize={20} mb={4} variant="section-title">
                  Projet 3 - Velock
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Paragraphe>
                La ville de Lyon souhaite mettre en place une location de vélo,
                pouvoir réserver un vélo dans une borne avec un nom et prénom
                pour un temps donné.
              </Paragraphe>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>JavaScript, HTML, CSS, API</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>Flag</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Libraire de Cartographie Leaflet </ListItem>
                      <ListItem>API JC Decaux (Open Data)</ListItem>
                      <ListItem>API Canvas</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  <MetaB>Notes </MetaB>
                  <span style={{ fontStyle: 'italic' }}>
                    Découverte de JavaScript en Programation Orienté Objet
                  </span>
                  <Box align="center" my={4}>
                    <Link href="/links/ocr/p3/index.html" isExternal>
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                      >
                        Vélock
                      </Button>
                    </Link>
                  </Box>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" fontSize={20} mb={4} variant="section-title">
                  Projet 4 - Jean Forteroche
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Paragraphe>
                Développer un moteur de blog avec une architecture WYSIWYG
              </Paragraphe>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>PHP, MySQL, HTML, CSS</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>Flag</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Pattern MVC </ListItem>
                      <ListItem>
                        Construction et administration d’une Base De Données
                      </ListItem>
                      <ListItem>Protection faille XSS</ListItem>
                      <ListItem>Protection injection SQL</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  <MetaB>Notes</MetaB>
                  <span style={{ fontStyle: 'italic' }}>
                    Découverte de PHP en Programation Orienté Objet
                  </span>
                  <Box align="center" my={4}>
                    <Link href="/links/ocr/p4/" isExternal>
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                      >
                        Jean Forteroche
                      </Button>
                    </Link>
                  </Box>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" fontSize={20} mb={4} variant="section-title">
                  Stage
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Paragraphe>
                Rapport de stage de chez{' '}
                <Link href="https://studio218.fr/" target="_blank">
                  Studio218
                </Link>
              </Paragraphe>
              <List>
                <ListItem>
                  <Box align="center" my={4}>
                    <Link
                      href="/links/ocr/p5/stage-studio218.pdf"
                      target="_blank"
                    >
                      <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                      >
                        Rapport de stage
                      </Button>
                    </Link>
                  </Box>
                </ListItem>
              </List>
              <Heading as="h5" fontSize={16} my={4}>
                Modernisation d&apos;un CRM :
              </Heading>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>PHP, MySQL, HTMl, CSS</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaB>Missions</MetaB>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Mise en place de Modal </ListItem>
                      <ListItem>Approche MVC</ListItem>
                      <ListItem>Gestion des uploads</ListItem>
                      <ListItem>Optimisation de Base De Données</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
              </List>
              <Heading as="h5" fontSize={16} my={4}>
                Création, mise à jour, de site sous Wordpress :
              </Heading>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>Wordpress, PHP, MySQL, CSS, Photoshop, W3C</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaB>Theme</MetaB>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Personnalisation de thèmes</ListItem>
                      <ListItem>Configuration des thèmes enfants.</ListItem>
                      <ListItem>Fonctions Php personnalisées</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>Images</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Retouche de photos sur Photoshop.</ListItem>
                      <ListItem>Optimisation du poids des images</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaB>SEO</MetaB>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>
                        Travaux sur les balises images, titres.
                      </ListItem>
                      <ListItem>Analyse sur Google Analytics.</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>W3C</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>Notion d’accessibilité du site RGAA.</ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
              </List>
              <Heading as="h5" fontSize={16} my={4}>
                Ébauche d’un jeu-vidéo :
              </Heading>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>JavaScript</span>
                </ListItem>
                <ListItem d="inline-flex" alignItems="baseline">
                  <MetaC>Missions</MetaC>
                  <UnorderedList my={4}>
                    <span>
                      <ListItem>
                        Création d’une maquette en Javascript pour un client.
                      </ListItem>
                      <ListItem>
                        Création d’une version approfondie fictive.
                      </ListItem>
                      <ListItem>
                        Tests des versions réelles et rapports de bug.
                      </ListItem>
                    </span>
                  </UnorderedList>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Layout>
  )
}
export default Ocr
