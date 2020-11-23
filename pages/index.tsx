import { Box, Center, Flex, Heading, IconButton, Image, Stack, Text, useTheme, Wrap, WrapItem } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import PageLayout from '../components/layouts/DefaultLayout';
import NavBar from '../components/NavBar';
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
          <Wrap direction='row' spacing={10} justify='center'>
            <WrapItem>
              <Center w='50%'>
                <Box maxW='30%'>
                  <Image
                    src='/imgs/profile.jpg'
                    borderRadius='full'
                    alt='Patrick Chan'
                  />
                </Box>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w=''>
                <Flex direction='column' alignContent='center'>
                  <Heading as='h1' size='2xl'>Patrick Chan</Heading>
                  <Text fontSize='lg' color={theme.colors.text.secondary}>Full-stack software developer based in Vancouver, BC.</Text>
                  <Stack aria-label='contact information' alignItems='center' mt={5} direction='row' spacing={5}>
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
              </Center>
            </WrapItem>
          </Wrap>
        </SubSection>
      </PageLayout>
    </>
  );
}

export default IndexPage;
