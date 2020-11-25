import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import SubSection from './SubSection';

type SectionListProps = {
  children?: ReactNode;
  heading: string;
}

const SectionList: React.FC<SectionListProps> = ({ children, heading }) => {
  return (
    <SubSection id='experience'>
      <Flex justify='flex-start' wrap='wrap'>
        <Box w={{ base: '250px', md: '200px', lg: '22%' }} minW='200px' h='100%' align='left' py={5}>
          <Heading size='lg' fontFamily='Open Sans'>{heading}</Heading>
        </Box>
        <Box w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
          <Stack as='ul' align='start' spacing={14}>
            {children}
          </Stack>
        </Box>
      </Flex>
    </SubSection>
  );
}

export default SectionList;
