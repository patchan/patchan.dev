import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ContactIcon from '../components/ContactIcon';
import Footer from '../components/Footer';
import About from '../components/layouts/About';
import PageLayout from '../components/layouts/PageLayout';
import Profile from '../components/layouts/Profile';
import NavBar from '../components/NavBar';
import Position from '../components/Position';
import Project from '../components/Project';
import SectionList from '../components/layouts/SectionList';

const siteTitle = 'Patrick Chan | Software Developer';
const siteDescription = 'Patrick Chan is a software developer from Vancouver, BC';
const contactInfo = (
  <>
    <ContactIcon
      label='email'
      link={`mailto:patrick@patchan.dev`}
      icon={<FiMail size={30} />}
    />
    <ContactIcon
      label='linkedin'
      link={`https://www.linkedin.com/in/chanpat`}
      icon={<FiLinkedin size={30} />}
    />
    <ContactIcon
      label='github'
      link={`https://github.com/patchan`}
      icon={<FiGithub size={30} />}
    />
  </>
);

const IndexPage = () => {
  return (
    <>
      <a id='skip' aria-label='skip navigation bar' href='#profile'></a>
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' content={siteDescription} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='https://patchan.dev' />
      </Head>
      <NavBar />
      <PageLayout>
        <Profile
          name='Patrick Chan'
          profileImage='/imgs/profile.jpg'
          description='Full-stack software developer based in Vancouver, BC'
          contact={contactInfo}
        />
        <About>
          <Text>
            Hello! I am a software developer from Vancouver, BC with a background in Neuroscience and Computer Science. I aspire to combine my passion for healthcare and technology to create a positive impact on society, striving to make tools that make life more convenient.
          </Text>
          <Text>
            Apart from being a software developer, I enjoy most of my time outdoors. During the warmer months here in Vancouver, I enjoy hiking and outdoor sports such as soccer. I also enjoy regularly practicing martial arts. In the winter, I enjoy snowsports such as skiing.
          </Text>
          <Text>
            When indoors, I am an aspiring jazz musician who spends an unusual amount of time immersed playing the piano, saxophone, or drums. On occasion, you might spot me performing in a local jazz club or at an open jam session.
          </Text>
        </About>
        <SectionList id='experience' heading='Experience'>
          <Position
            company='Thrive Health'
            link='https://thrive.health'
            title='Software Developer Intern'
            dates={{ start: 'Sep 2020', end: 'Apr 2021'}}
            tech={['TypeScript', 'Node.js', 'React', 'Redux', 'PostgreSQL']}
          />
          <Position
            company='Aging, Mobility, and Cognitive Neuroscience Lab'
            link='https://cogmob.rehab.med.ubc.ca/'
            title='Research Assistant'
            dates={{ start: 'Nov 2016', end: 'Jun 2019'}}
            tech={['R', 'Python', 'REDCap']}
          />
        </SectionList>
        <SectionList id='projects' heading='Projects'>
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
        </SectionList>
        <Box p={20} />
      </PageLayout>
      <Footer />
    </>
  );
}

export default IndexPage;
