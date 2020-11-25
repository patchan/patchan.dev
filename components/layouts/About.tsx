import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import SubSection from './SubSection';

type AboutProps = {
  children?: ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <SubSection id='about'>
      <Flex alignItems='stretch' justify='flex-start' wrap='wrap'>
        <Box
          display='block'
          minW={{ base: '200px', sm: '200px', md: '220px' }}
          h='100%'
          align='left'
          py={5}
        >
          <Heading size='lg' fontFamily='Open Sans'>About Me</Heading>
        </Box>
        <Stack
          align='start'
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          minW='60%'
          h='100%'
          py={5}
        >
          {children}
        </Stack>
      </Flex>
    </SubSection>
  );
}

export default About;
