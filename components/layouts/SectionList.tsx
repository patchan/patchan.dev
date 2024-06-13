import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack, useColorModeValue, useTheme } from '@chakra-ui/react'
import SubSection from './SubSection';

type SectionListProps = {
  children?: ReactNode;
  heading: string;
  id: string;
}

const SectionList: React.FC<SectionListProps> = ({ children, id, heading }) => {
  const theme = useTheme();
  const headerColor = useColorModeValue(theme.colors.text.accent, theme.colors.white);
  
  return (
    <SubSection id={id}>
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
            {heading}
          </Heading>
        </Box>
        <Stack
          as='ul'
          align='start'
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          minW='60%'
          h='100%'
          spacing={5}
        >
          {children}
        </Stack>
      </Flex>
    </SubSection>
  );
}

export default SectionList;
