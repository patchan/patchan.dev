import React, { ReactNode } from 'react'
import { Box, Flex, Heading, Image, Stack, Text, useTheme } from '@chakra-ui/react'
import SubSection from './SubSection';

type ProfileProps = {
  profileImage: string;
  name: string;
  description?: string;
  contact: ReactNode;
}

const Profile: React.FC<ProfileProps> = ({ profileImage, name, description, contact }) => {
  const theme = useTheme();
  
  return (
    <SubSection id='profile'>
      <Flex align='center' justify='flex-start' wrap='wrap'>
        <Box w={{ base: '200px', md: '200px', lg: '22%'}} h='100%'>
          <Image
            w='80%'
            maxW='200px'
            src={profileImage}
            borderRadius='full'
            alt={name}
          />
        </Box>
        <Box w={{ base: '100%', md: '70%'}} h='100%' py={10}>
          <Flex direction='column'>
            <Heading as='h1' size='4xl' fontFamily='Open Sans'>
              {name}
            </Heading>
            <Text fontSize='xl' color={theme.colors.text.secondary}>
              {description}
            </Text>
            <Stack
              aria-label='contact info'
              alignItems='center'
              mt={5}
              direction='row'
              spacing={5}
            >
              {contact}
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </SubSection>
  );
}

export default Profile;
