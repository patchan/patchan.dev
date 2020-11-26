import React, { useState } from "react";
import { Box, IconButton, Spacer, Stack, useDisclosure, useTheme } from "@chakra-ui/react";
import { FiMenu } from 'react-icons/fi';
import { useWindowSize } from '../hooks/useWindowSize';
import { NavLink } from './NavLink';
import { LogoLink } from './LogoLink';
import { ResumeLink } from './ResumeLink';
import { NavDrawer } from './NavDrawer';

type NavBarProps = {}

export const NavItems: React.FC = () => {
  return (
    <>
      <NavLink target='about' style='text'>About</NavLink>
      <NavLink target='experience' style='text'>Experience</NavLink>
      <NavLink target='projects' style='text'>Projects</NavLink>
    </>
  );
}

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const [boxShadow, setBoxShadow] = useState('none');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();

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
      position='fixed'
      top={0}
      zIndex={1}
      boxShadow={boxShadow}
      transition='ease'
      transitionDuration='0.25s'
    >
      <Box maxW={theme.sizes.width} p={0} mx='auto'>
      {windowSize.width > 750
        ?
          <Stack direction='row' align='center' px={10} py={4}>
            <LogoLink />
            <Spacer />
            <Stack as='nav' align='center' direction='row' spacing={1}>
              <NavItems />
            </Stack>
            <ResumeLink />
          </Stack>
        :
          <Stack direction='row' align='center' px={{ base: 5, sm: 5, md: 10 }} py={4}>
            <LogoLink />
            <Spacer />
            <IconButton
              tabIndex={0}
              aria-label='Open Menu'
              width='40px'
              borderRadius='10px'
              colorScheme='purple'
              icon={<FiMenu size='22px' color='black' />}
              variant='ghost'
              onClick={onOpen}
            />
            <NavDrawer isOpen={isOpen} onClose={onClose} />
          </Stack>
      }
      </Box>
    </Box>
  );
}

export default NavBar
