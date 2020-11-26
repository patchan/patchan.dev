import React from 'react';
import { Box, Center, Stack, Text, useTheme } from '@chakra-ui/react';

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  const theme = useTheme();

  return (
    <Box as='footer' p={7} bgColor={theme.colors.gray[100]}>
      <Center>
        <Stack align='center' spacing={1}>
          <Text fontSize='sm'>
            © Patrick Chan {new Date().getFullYear()}
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}

export default Footer;
