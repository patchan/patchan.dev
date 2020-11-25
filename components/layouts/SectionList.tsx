import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import SubSection from './SubSection';

type SectionListProps = {
  children?: ReactNode;
  heading: string;
  id: string;
}

const SectionList: React.FC<SectionListProps> = ({ children, id, heading }) => {
  return (
    <SubSection id={id}>
      <Flex alignItems='stretch' justify='flex-start' wrap='wrap'>
        <Box
          display='block'
          minW={{ base: '200px', sm: '200px', md: '220px' }}
          h='100%'
          align='left'
          py={5}
        >
          <Heading size='lg' fontFamily='Open Sans'>{heading}</Heading>
        </Box>
        <Stack
          as='ul'
          align='start'
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          minW='60%'
          h='100%'
          py={5}
          spacing={14}
        >
          {children}
        </Stack>
      </Flex>
    </SubSection>
  );
}

export default SectionList;
