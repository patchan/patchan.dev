import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { FiFileText } from 'react-icons/fi';

type NavBarProps = {}

type NavLinkProps = {
  children: React.ReactNode;
  target: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, target, ...props }) => {
  const handleInput = () => {
    const elem = document.getElementById(target);
    elem?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleKeyInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const elem = document.getElementById(target);
      elem?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Button
      as='a'
      tabIndex={0}
      size='md'
      height='30px'
      borderRadius={25}
      p={3}
      variant='ghost'
      onClick={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      {children}
    </Button>
  );
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Stack direction='row' justify='flex-end' p={10}>
      <Stack as='nav' align='center' direction='row' spacing={1}>
        <NavLink target='about'>About</NavLink>
        <NavLink target='experience'>Experience</NavLink>
        <NavLink target='projects'>Projects</NavLink>
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
  );
}

export default NavBar
