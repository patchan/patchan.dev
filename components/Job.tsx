import React from 'react'
import { Flex, Heading, Link, Tag, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
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
  const tagBackground = useColorModeValue(theme.colors.purple[100], '#3a3a3a');
  const tagColor = useColorModeValue(theme.colors.text.primary, '#eaeaea');
  const textColor = useColorModeValue(theme.colors.text.secondary, theme.colors.dark.text.secondary);

  return (
    <SectionListItem>
      <Heading as='h3' size='md' fontFamily='Open Sans'>
        <Link href={link} isExternal>
          {company}
        </Link>
      </Heading>
      <Flex justify='space-between' wrap='wrap' align='center'>
        <Text color={textColor} mr='20%'>{title}</Text>
        <Text color={textColor}>{`${dates.start} to ${dates.end}`}</Text> 
      </Flex>
      <Flex as='ul' aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) =>
          <Tag
            as='li'
            key={tag}
            color={tagColor}
            mr={2} 
            mt={2}
            colorScheme='purple'
            backgroundColor={tagBackground}
          >
            {tag}
          </Tag>)
        }
      </Flex>
    </SectionListItem>
  );
}

export default Job;
