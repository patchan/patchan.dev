import React from 'react'
import { Button, Heading, Spacer, Stack, Tag, Text, useTheme } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io';
import SectionListItem from './layouts/SectionListItem';

type ProjectProps = {
  title: string;
  link: string;
  tech?: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, link, tech, description }) => {
  const theme = useTheme();
  
  return (
    <SectionListItem>
      <Stack direction='row' align='center'>
        <Heading as='h3' fontSize='1.3em' fontFamily='Open Sans'>{title}</Heading>
        <Spacer />
        <Button
          as='a'
          size='sm'
          colorScheme='purple'
          href={link}
          target='_blank'
          rel='noopener'
          leftIcon={<IoLogoGithub size={18} />}
          iconSpacing={1}
          boxShadow='4px 4px 9px #c9c9c9, -4px -4px 9px #fff'
          borderRadius={8}
        >
          Source code
        </Button>
      </Stack>
      <Text color={theme.colors.text.secondary}>{description}</Text>
      <Stack aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) =>
          <Tag key={tag} color={theme.colors.text.primary} colorScheme='purple'>{tag}</Tag>)
        }
      </Stack>
    </SectionListItem>
  );
}

export default Project;
