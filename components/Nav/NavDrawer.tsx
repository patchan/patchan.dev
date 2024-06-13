import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Stack, useColorModeValue, useTheme } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { NavItems } from './NavBar';
import ResumeLink from './ResumeLink';

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const background = useColorModeValue(theme.colors.white, theme.colors.dark.background.card);
  const iconButtonColor = useColorModeValue(theme.colors.black, theme.colors.white);

  const closeDrawer = () => {
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size='xs'>
      <DrawerOverlay>
        <DrawerContent backgroundColor={background}>
          <DrawerHeader p={0}>
            <DrawerBody p={4}>
              <Box alignItems='right'>
                <IconButton
                  aria-label='Close Menu'
                  colorScheme='purple'
                  icon={<FiX size='22px' color={iconButtonColor} />}
                  variant='ghost'
                  onClick={closeDrawer}
                />
              </Box>
              <Stack as='nav' p={4} spacing={4}>
                <NavItems />
                <ResumeLink />
              </Stack>
            </DrawerBody>
          </DrawerHeader>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default NavDrawer;
