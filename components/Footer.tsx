import React from 'react';
import { Box, Center, Stack, Text } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';
import Link from 'next/link';
import NavLink from './Nav/NavLink';

const Footer: React.FC = () => {
  return (
    <Box as='footer' p={7}>
      <Center>
        <Stack align='center' direction='row' spacing={1}>
          <Text fontSize='sm'>
            © Patrick Chan {new Date().getFullYear()}. <Link href='https://github.com/patchan/patchan.dev'>View source code</Link>.
          </Text>
          <NavLink label='go to top of page' style='icon' target='top'>
            <FiChevronUp />
          </NavLink>
        </Stack>
      </Center>
    </Box>
  );
}

export default Footer;
