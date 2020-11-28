import React from 'react'
import { Flex, Heading, Link, Tag, Text, useTheme } from '@chakra-ui/react'
import SectionListItem from './layouts/SectionListItem';

type JobProps = {
  company: string;
  link: string;
  title: string;
  dates: { start: string, end: string };
  tech?: string[];
}

const Job: React.FC<JobProps> = ({ company, link, title, dates, tech }) => {
  const theme = useTheme();

  return (
    <SectionListItem>
      <Heading as='h3' size='md' fontFamily='Open Sans'>
        <Link href={link} isExternal>
          {company}
        </Link>
      </Heading>
      <Flex justify='space-between' wrap='wrap' align='center'>
        <Text color={theme.colors.text.secondary} mr='20%'>{title}</Text>
        <Text color={theme.colors.text.secondary}>{`${dates.start} to ${dates.end}`}</Text> 
      </Flex>
      <Flex as='ul' aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) =>
          <Tag
            as='li'
            key={tag}
            color={theme.colors.text.primary}
            mr={2} 
            mt={2}
            colorScheme='purple'
          >
            {tag}
          </Tag>)
        }
      </Flex>
    </SectionListItem>
  );
}

export default Job;
