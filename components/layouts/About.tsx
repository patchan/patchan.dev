import React, { ReactNode } from 'react'
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import SubSection from '../SubSection';

type AboutProps = {
  children?: ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <SubSection id='about'>
      <Flex justify='flex-start' wrap='wrap'>
        <Box w={{ base: '250px', md: '200px', lg: '22%' }} minw='200px' h='100%' align='left' py={5}>
          <Heading size='lg' fontFamily='Merriweather Sans'>About Me</Heading>
        </Box>
        <Center w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
          <Stack>
            {children}
          </Stack>
        </Center>
      </Flex>
    </SubSection>
  );
}

export default About;
