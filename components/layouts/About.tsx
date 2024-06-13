import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack, useColorModeValue, useTheme } from '@chakra-ui/react'
import SubSection from './SubSection';

type AboutProps = {
  children?: ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  const theme = useTheme();
  const boxShadow = useColorModeValue(theme.shadows.boxLight, theme.shadows.boxDark);
  const headerColor = useColorModeValue(theme.colors.text.accent, theme.colors.white);
  const background = useColorModeValue(theme.colors.white, theme.colors.dark.background.card);
  const textColor = useColorModeValue(theme.colors.text.secondary, theme.colors.dark.text.secondary);

  return (
    <SubSection id='about'>
      <Flex alignItems='stretch' justify='flex-start' wrap='wrap'>
        <Box
          display='block'
          minW={{ base: '210px', sm: '210px', md: '230px' }}
          h='100%'
          alignItems='left'
          px={{ base: 2, sm: 0 }}
          py={5}
        >
          <Heading
            fontSize='3xl'
            color={headerColor}
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
          color={textColor}
          p={{ base: 4, sm: 8, md: 8, lg: 10 }}
          boxShadow={boxShadow}
          borderRadius={8}
          backgroundColor={background}
        >
          {children}
        </Stack>
      </Flex>
    </SubSection>
  );
}

export default About;
