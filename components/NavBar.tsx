import React from "react";
import { Button, Flex, Heading, Stack, useTheme } from "@chakra-ui/react";
import { FiFileText } from 'react-icons/fi';

type NavBarProps = {}

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Button
      as='a'
      tabIndex={0}
      size='md'
      height='30px'
      borderRadius={25}
      p={3}
      variant='ghost'
      {...props}
    >
      {children}
    </Button>
  );
}

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();

  return (
    <Flex
      as='header'
      alignItems='center'
      w='100%'
      wrap='wrap'
      justify='space-between'
      px={6}
      py={5}
    >
      <Heading as='a' href='/' size='md'>
        patchan.dev
      </Heading>
      <Stack direction='row'>
        <Stack as='nav' align='center' direction='row' spacing={1}>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </Stack>
        <Button
          as='a'
          tabIndex={0}
          size='md'
          borderRadius='10px'
          colorScheme='green'
          leftIcon={<FiFileText size='1.1em' />}
          iconSpacing={1}
          href='/files/PatrickChan_Resume.pdf'
        >
          Resume
        </Button>
      </Stack>
    </Flex>
  );
}

export default NavBar
