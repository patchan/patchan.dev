import React from 'react'
import { Button, Heading, Spacer, Stack, Tag, Text, useTheme } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io';

type ProjectProps = {
  title: string;
  link: string;
  tech?: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, link, tech, description }) => {
  const theme = useTheme();

  return (
    <Stack w='100%'>
      <Stack direction='row' align='center'>
        <Heading as='h3' fontSize='1.2em'>{title}</Heading>
        <Spacer />
        <Button
          as='a'
          size='sm'
          colorScheme='green'
          href={link}
          leftIcon={<IoLogoGithub size={18} />}
          iconSpacing={1}
        >
          Source code
        </Button>
      </Stack>
      <Stack aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) => <Tag size='sm'>{tag}</Tag>)}
      </Stack>
      <Text>{description}</Text>
    </Stack>
  );
}

export default Project;
