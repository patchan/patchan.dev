import React from 'react';
import { Box, Center, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';
import NavLink from './Nav/NavLink';

const Footer: React.FC = () => {
  const linkColor = useColorModeValue('purple.500', 'purple.400');

  return (
    <Box as='footer' p={{ base: 5, sm: 7 }}>
      <Center>
        <Stack align='center' direction='row' spacing={1}>
          <Text fontSize='sm'>
            © Patrick Chan {new Date().getFullYear()}.
            This website is <Link
              href='https://github.com/patchan/patchan.dev'
              target='_blank'
              rel='noopener'
              color={linkColor}
            >
              open source
            </Link>.
          </Text>
          <NavLink label='go to top of page' style='icon' target='top'>
            <FiChevronUp size={20} />
          </NavLink>
        </Stack>
      </Center>
    </Box>
  );
}

export default Footer;
