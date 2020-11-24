import { Box, Center, Flex, Heading, IconButton, Image, Stack, Text, useTheme } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import PageLayout from '../components/layouts/PageLayout';
import NavBar from '../components/NavBar';
import Project from '../components/Project';
import SubSection from '../components/SubSection';

const title = 'Patrick Chan | Software Developer';
const description = 'Patrick Chan is a software developer from Vancouver, BC';

const IndexPage = () => {
  const theme = useTheme();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={description} />
      </Head>
      <NavBar />
      <PageLayout>
        <SubSection>
          <Flex align='center' justify='flex-start' wrap='wrap'>
            <Box w={{ base: '200px', md: '200px', lg: '22%'}} h='100%' py={5}>
              <Image
                w='80%'
                src='/imgs/profile.jpg'
                borderRadius='full'
                alt='Patrick Chan'
              />
            </Box>
            <Box w={{ base: '100%', md: '70%'}} h='100%' py={10}>
              <Flex direction='column'>
                <Heading as='h1' size='3xl'>Patrick Chan</Heading>
                <Text fontSize='xl' color={theme.colors.text.secondary}>Full-stack software developer based in Vancouver, BC.</Text>
                <Stack aria-label='contact info' alignItems='center' mt={5} direction='row' spacing={5}>
                  <IconButton
                    as='a'
                    aria-label='email'
                    isRound
                    tabIndex={0}
                    size='lg'
                    href={`mailto:patrick@patchan.dev`}
                    icon={<FiMail size={30} />}
                  />
                  <IconButton
                    as='a'
                    aria-label='linkedin'
                    isRound
                    tabIndex={0}
                    size='lg'
                    href={`https://www.linkedin.com/in/chanpat/`}
                    icon={<FiLinkedin size={30} />}
                  />
                  <IconButton
                    as='a'
                    aria-label='github'
                    isRound
                    tabIndex={0}
                    size='lg'
                    href={`https://github.com/patchan`}
                    icon={<FiGithub size={30} />}
                  />
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </SubSection>
        <SubSection id='about'>
          <Flex justify='flex-start' wrap='wrap'>
            <Box w={{ base: '250px', md: '200px', lg: '22%' }} minw='200px' h='100%' align='left' py={5}>
              <Heading size='lg'>About Me</Heading>
            </Box>
            <Center w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
              <Stack>
                <Text>
                  Hello! I am a software developer from Vancouver, BC with a background in Neuroscience and Computer Science. I aspire to combine my passion for healthcare and technology to create a positive impact on society, striving to make tools that make life more convenient.
                </Text>
                <Text>
                  Apart from being a software developer, I enjoy most of my time outdoors. During the warmer months here in Vancouver, I enjoy hiking and outdoor sports such as soccer. I also enjoy regularly practicing martial arts. In the winter, I enjoy snowsports such as skiing.
                </Text>
                <Text>
                  When indoors, I am an aspiring jazz musician who spends an unusual amount of time immersed playing the piano, saxophone, or drums. On occasion, you might spot me performing in a local jazz club or at an open jam session.
                </Text>
              </Stack>
            </Center>
          </Flex>
        </SubSection>
        <SubSection id='experience'>
          <Flex justify='flex-start' wrap='wrap'>
            <Box w={{ base: '250px', md: '200px', lg: '22%' }} minW='200px' h='100%' align='left' py={5}>
              <Heading size='lg'>Experience</Heading>
            </Box>
            <Box w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
              <Stack align='start' spacing={14}>
                <Experience
                  company='Thrive Health'
                  link='https://thrive.health'
                  title='Software Developer Intern'
                  dates={{ start: 'Sep 2020', end: 'Apr 2021'}}
                  tech={['TypeScript', 'Node.js', 'React', 'Redux', 'PostgreSQL']}
                />
                <Experience
                  company='Aging, Mobility, and Cognitive Neuroscience Lab'
                  link='https://cogmob.rehab.med.ubc.ca/'
                  title='Research Assistant'
                  dates={{ start: 'Nov 2016', end: 'Jun 2019'}}
                  tech={['R', 'Python', 'REDCap']}
                />
              </Stack>
            </Box>
          </Flex>
        </SubSection>
        <SubSection id='projects'>
          <Flex justify='flex-start' wrap='wrap'>
            <Box w={{ base: '250px', md: '200px', lg: '22%' }} minW='200px' h='100%' align='left' py={5}>
              <Heading size='lg'>Projects</Heading>
            </Box>
            <Box w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
              <Stack align='start' spacing={14}>
                <Project
                  title='potatofy'
                  link='https://patchan.ca/potatofy'
                  tech={['Python', 'OAuth 2.0']}
                  description='Questrade integrated desktop GUI application for simplified rebalancing of investment portfolios'
                />
                <Project
                  title='contrast-checker'
                  link='https://github.com/patchan/contrast-checker'
                  tech={['Rust']}
                  description='Rust-based CLI tool for calculating contrast ratio between two colours based on WCAG 2.0'
                />
                <Project
                  title='AdasPlusML'
                  link='https://github.com/patchan/adasplusml'
                  tech={['Python', 'Scikit-learn', 'pandas']}
                  description='Machine learning model for scoring the ADAS-Cog Plus cognitive assessment'
                />
              </Stack>
            </Box>
          </Flex>
        </SubSection>
        <Box p={20} />
      </PageLayout>
      <Footer />
    </>
  );
}

export default IndexPage;
