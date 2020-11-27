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
      <Flex align='center' justify='flex-start' wrap='wrap' pt={5}>
        <Box
          display='block'
          minW={{ base: '200px', sm: '200px', md: '220px' }}
          h='100%'
          align='left'
          py={5}
        >
          <Image
            w='80%'
            maxW='200px'
            src={profileImage}
            borderRadius='full'
            alt={`portrait of ${name}`}
          />
        </Box>
        <Flex
          direction='column'
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          minW='60%'
          h='100%'
          px={{ base: 0, sm: 0, md: 8 }}
          py={{ base: 5, sm: 8 }}
        >
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
      </Flex>
    </SubSection>
  );
}

export default Profile;
