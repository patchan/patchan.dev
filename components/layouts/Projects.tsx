import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import SubSection from '../SubSection';

type ProjectsProps = {
  children?: ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({ children }) => {
  return (
    <SubSection id='projects'>
      <Flex justify='flex-start' wrap='wrap'>
        <Box w={{ base: '250px', md: '200px', lg: '22%' }} minW='200px' h='100%' align='left' py={5}>
          <Heading size='lg' fontFamily='Open Sans'>Projects</Heading>
        </Box>
        <Box w={{ base: '100%', md: '70%', lg: '78%'}} h='100%' py={5}>
          <Stack align='start' spacing={14}>
            {children}
          </Stack>
        </Box>
      </Flex>
    </SubSection>
  );
}

export default Projects;
