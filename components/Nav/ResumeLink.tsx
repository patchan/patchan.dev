import React from 'react';
import { Button } from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';

const ResumeLink: React.FC = () => {
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
      rel='noopener'
      boxShadow='4px 4px 9px #c9c9c9, -4px -4px 9px #fff'
    >
      Resume
    </Button>
  );
}

export default ResumeLink;
