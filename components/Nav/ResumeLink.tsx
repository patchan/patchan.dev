import React from 'react';
import { Button, useColorModeValue, useTheme } from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';

const ResumeLink: React.FC = () => {
  const theme = useTheme();
  const boxShadow = useColorModeValue('4px 4px 9px #c9c9c9', '3px 3px 6px #000');
  const backgroundColor = useColorModeValue(theme.colors.purple[500], theme.colors.purple[400]);
  const color = useColorModeValue('white', 'black');

  return (
    <Button
      as='a'
      tabIndex={0}
      size='md'
      borderRadius={8}
      colorScheme='purple'
      leftIcon={<FiFileText size='1.1em' color={color} />}
      href='/files/PatrickChan_Resume.pdf'
      target='_blank'
      rel='noopener'
      boxShadow={boxShadow}
      color={color}
      backgroundColor={backgroundColor}
    >
      Resume
    </Button>
  );
}

export default ResumeLink;
