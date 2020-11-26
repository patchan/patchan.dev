import React, { useState } from "react";
import { Box, Button, Image, Link, Spacer, Stack, useTheme } from "@chakra-ui/react";
import { FiFileText } from 'react-icons/fi';

type NavBarProps = {}

type NavLinkProps = {
  children: React.ReactNode;
  target: string;
  style: 'icon' | 'text';
  label?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, target, style, label, ...props }) => {
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

  return (style === 'icon' ?
    <Link
      tabIndex={0}
      aria-label={label}
      size='md'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      {children}
    </Link> :
    <Button
      as='a'
      tabIndex={0}
      size='md'
      height='30px'
      borderRadius={25}
      p={3}
      variant='ghost'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      {children}
    </Button>
  );
}

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const [boxShadow, setBoxShadow] = useState('none');

  const handleScroll = () => {
    return (window.scrollY > 30) ? setBoxShadow('md') : setBoxShadow('none');
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Box
      as='header'
      w='100%'
      backgroundColor={theme.colors.white}
      position='sticky'
      top={0}
      zIndex={1}
      boxShadow={boxShadow}
      transition='ease'
      transitionDuration='0.25s'
    >
      <Box maxW={theme.sizes.width} p={0} mx='auto'>
        <Stack direction='row' align='center' px={10} py={5}>
          <NavLink label='go to page top' target='skip' style='icon'>
            <Image aria-hidden width='32px' src='/apple-touch-icon.png' />
          </NavLink>
          <Spacer />
          <Stack as='nav' align='center' direction='row' spacing={1}>
            <NavLink target='about' style='text'>About</NavLink>
            <NavLink target='experience' style='text'>Experience</NavLink>
            <NavLink target='projects' style='text'>Projects</NavLink>
          </Stack>
          <Button
            as='a'
            tabIndex={0}
            size='md'
            borderRadius='10px'
            colorScheme='purple'
            leftIcon={<FiFileText size='1.1em' />}
            iconSpacing={1}
            href='/files/PatrickChan_Resume.pdf'
            target='_blank'
          >
            Resume
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default NavBar
