import React from 'react'
import { Button, Flex, Heading, Stack, Tag, Text, useTheme } from '@chakra-ui/react'
import SectionListItem from './layouts/SectionListItem';
import { FiCode } from 'react-icons/fi';

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
      <Stack direction='column' spacing={0}>
        <Heading as='h3' size='md' fontFamily='Open Sans' pb={2}>{title}</Heading>
        <Text color={theme.colors.text.secondary} pb={2}>{description}</Text>
        <Flex justify='space-between' align='flex-end' direction='row' wrap='wrap'>
          <Flex as='ul' aria-label='technologies used' direction='row' wrap='wrap'>
            {tech?.map((tag) =>
              <Tag
                as='li'
                key={tag}
                color={theme.colors.text.primary}
                mr={2}
                mt={2}
                maxH={1}
                colorScheme='purple'
              >
                {tag}
              </Tag>)
            }
          </Flex>
          <Button
            as='a'
            size='sm'
            colorScheme='purple'
            href={link}
            target='_blank'
            rel='noopener'
            leftIcon={<FiCode size={18} />}
            boxShadow='4px 4px 9px #c9c9c9'
            borderRadius={8}
            mt={5}
          >
            Source code
          </Button>
        </Flex>
      </Stack>
    </SectionListItem>
  );
}

export default Project;
