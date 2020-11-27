import React from 'react';
import { Box, Center, Link, Stack, Text } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';
import NavLink from './Nav/NavLink';

const Footer: React.FC = () => {
  return (
    <Box as='footer' p={7}>
      <Center>
        <Stack align='center' direction='row' spacing={1}>
          <Text fontSize='sm'>
            © Patrick Chan {new Date().getFullYear()}.
            This website is <Link
              href='https://github.com/patchan/patchan.dev'
              target='_blank'
              rel='noopener'
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
