import React from 'react'
import { Button, Flex, Heading, Stack, Tag, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
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
  const boxShadow = useColorModeValue('4px 4px 9px #c9c9c9', '4px 4px 9px #171717');
  const tagBackground = useColorModeValue(theme.colors.purple[100], '#3a3a3a');
  const tagColor = useColorModeValue(theme.colors.text.primary, '#eaeaea');
  const textColor = useColorModeValue(theme.colors.text.secondary, theme.colors.dark.text.secondary);
  const buttonColor = useColorModeValue(theme.colors.purple[500], theme.colors.purple[400]);
  const buttonTextColor = useColorModeValue('white', 'black');
  
  return (
    <SectionListItem>
      <Stack direction='column' spacing={0}>
        <Heading as='h3' size='md' fontFamily='Open Sans' pb={2}>{title}</Heading>
        <Text color={textColor} pb={2}>{description}</Text>
        <Flex justify='space-between' align='flex-end' direction='row' wrap='wrap'>
          <Flex as='ul' aria-label='technologies used' direction='row' wrap='wrap'>
            {tech?.map((tag) =>
              <Tag
                as='li'
                key={tag}
                color={tagColor}
                mr={2}
                mt={2}
                maxH={1}
                backgroundColor={tagBackground}
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
            color={buttonTextColor}
            leftIcon={<FiCode size={18} color={buttonTextColor} />}
            boxShadow={boxShadow}
            borderRadius={8}
            mt={5}
            background={buttonColor}
          >
            Source code
          </Button>
        </Flex>
      </Stack>
    </SectionListItem>
  );
}

export default Project;
