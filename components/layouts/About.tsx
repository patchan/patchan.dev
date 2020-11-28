import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack, useTheme } from '@chakra-ui/react'
import SubSection from './SubSection';

type AboutProps = {
  children?: ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <SubSection id='about'>
      <Flex alignItems='stretch' justify='flex-start' wrap='wrap'>
        <Box
          display='block'
          minW={{ base: '200px', sm: '200px', md: '220px' }}
          h='100%'
          align='left'
          px={{ base: 4 }}
          py={5}
        >
          <Heading
            size='lg'
            color={theme.colors.text.accent}
            fontFamily='Open Sans'
          >
            About Me
          </Heading>
        </Box>
        <Stack
          align='start'
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          minW='60%'
          h='100%'
          color={theme.colors.text.secondary}
          p={{ base: '1rem', sm: 8, md: 8, lg: 10 }}
          boxShadow={theme.shadows.defaultBox}
          borderRadius={8}
        >
          {children}
        </Stack>
      </Flex>
    </SubSection>
  );
}

export default About;
