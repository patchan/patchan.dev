import React from 'react'
import { Button, Heading, Spacer, Stack, Tag, Text } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io';

type ProjectProps = {
  title: string;
  link: string;
  tech?: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, link, tech, description }) => {
  return (
    <Stack w='100%'>
      <Stack direction='row' align='center'>
        <Heading as='h3' fontSize='1.2em' fontFamily='Merriweather Sans'>{title}</Heading>
        <Spacer />
        <Button
          as='a'
          size='sm'
          colorScheme='purple'
          href={link}
          leftIcon={<IoLogoGithub size={18} />}
          iconSpacing={1}
        >
          Source code
        </Button>
      </Stack>
      <Text>{description}</Text>
      <Stack aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) => <Tag key={tag} size='sm'>{tag}</Tag>)}
      </Stack>
    </Stack>
  );
}

export default Project;
