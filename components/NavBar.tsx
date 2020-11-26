import React, { useState } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Image, Link, Spacer, Stack, Text, useDisclosure, useTheme } from "@chakra-ui/react";
import { FiFileText, FiMenu, FiX } from 'react-icons/fi';
import { useWindowSize } from './hooks/useWindowSize';

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
      p={3}
      variant='ghost'
      colorScheme='purple'
      onClick={handleInput}
      onTouchEnd={handleInput}
      onKeyDown={handleKeyInput}
      {...props}
    >
      <Text color='black'>
        {children}
      </Text>
    </Button>
  );
}

export const ResumeLink: React.FC = () => {
  return (
      <Button
      as='a'
      tabIndex={0}
      size='md'
      borderRadius='8px'
      colorScheme='purple'
      leftIcon={<FiFileText size='1.1em' />}
      iconSpacing={1}
      href='/files/PatrickChan_Resume.pdf'
      target='_blank'
    >
      Resume
    </Button>
  );
}

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const [boxShadow, setBoxShadow] = useState('none');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();

  const openDrawer = () => {
    onOpen();
  }

  const closeDrawer = () => {
    onClose();
  }

  const handleScroll = () => {
    return (window.scrollY > 30) ? setBoxShadow('md') : setBoxShadow('none');
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

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
      {windowSize.width > 750 ? 
        <Stack direction='row' align='center' px={10} py={4}>
          <NavLink label='go to page top' target='skip' style='icon'>
            <Image aria-hidden width='32px' src='/apple-touch-icon.png' />
          </NavLink>
          <Spacer />
          <Stack as='nav' align='center' direction='row' spacing={1}>
            <NavLink target='about' style='text'>About</NavLink>
            <NavLink target='experience' style='text'>Experience</NavLink>
            <NavLink target='projects' style='text'>Projects</NavLink>
          </Stack>
          <ResumeLink />
        </Stack>
        :
        <Stack direction='row' align='center' px={10} py={4}>
          <NavLink label='go to page top' target='skip' style='icon'>
            <Image aria-hidden width='32px' src='/apple-touch-icon.png' />
          </NavLink>
          <Spacer />
          <IconButton
            tabIndex={0}
            aria-label='Open Menu'
            width='40px'
            borderRadius='10px'
            colorScheme='purple'
            icon={<FiMenu size='22px' color='black' />}
            variant='ghost'
            onClick={openDrawer}
          />
          <Drawer isOpen={isOpen} onClose={onClose} size='xs'>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader p={0}>
                  <DrawerBody p={4}>
                    <Box align='right'>
                      <IconButton
                        aria-label='Close Menu'
                        colorScheme='purple'
                        icon={<FiX size='22px' color='black' />}
                        variant='ghost'
                        onClick={closeDrawer}
                      />
                    </Box>
                    <Stack p={4} spacing={4}>
                      <NavLink target='about' style='text'>About</NavLink>
                      <NavLink target='experience' style='text'>Experience</NavLink>
                      <NavLink target='projects' style='text'>Projects</NavLink>
                      <ResumeLink />
                    </Stack>
                  </DrawerBody>
                </DrawerHeader>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Stack>
      }
      </Box>
    </Box>
  );
}

export default NavBar
