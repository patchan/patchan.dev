import React from 'react';
import { Box, IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label = useColorModeValue('Enable Dark Mode', 'Enable Light Mode');
  return (
    <Box>
      <Tooltip label={label} hasArrow>
        {(colorMode === 'light') ?
          <IconButton
            aria-label='enable dark mode'
            isRound
            variant='ghost'
            colorScheme='purple'
            color='black'
            icon={<FiMoon />}
            onClick={toggleColorMode}
          /> :
          <IconButton
            aria-label='enable light mode'
            isRound
            variant='ghost'
            colorScheme='purple'
            color='white'
            icon={<FiSun />}
            onClick={toggleColorMode}
          />
        }
      </Tooltip>
    </Box>
  );
};

export default DarkModeToggle;
