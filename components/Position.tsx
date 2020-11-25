import React from 'react'
import { Heading, Link, Spacer, Stack, Tag, Text, useTheme } from '@chakra-ui/react'

type PositionProps = {
  company: string;
  link: string;
  title: string;
  dates: { start: string, end: string };
  tech?: string[];
}

const Position: React.FC<PositionProps> = ({ company, link, title, dates, tech }) => {
  const theme = useTheme();

  return (
    <Stack w='100%'>
      <Stack direction='row' wrap='wrap' align='center' spacing={0}>
        <Heading as='h3' fontSize='1.2em'>
          <Link href={link}>
            {company}
          </Link>
        </Heading>
        <Spacer />
        <Text color={theme.colors.text.secondary}>{`${dates.start} to ${dates.end}`}</Text> 
      </Stack>
      <Text size='sm' color={theme.colors.text.secondary}>{title}</Text>
      <Stack aria-label='technologies used' direction='row' wrap='wrap'>
        {tech?.map((tag) => <Tag key={tag} size='sm'>{tag}</Tag>)}
      </Stack>
    </Stack>
  );
}

export default Position;
