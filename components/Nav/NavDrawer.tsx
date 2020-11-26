import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Stack } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { NavItems } from './NavBar';
import { ResumeLink } from './ResumeLink';

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {

  const closeDrawer = () => {
    onClose();
  }

  return (
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