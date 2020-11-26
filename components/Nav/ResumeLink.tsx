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
    >
      Resume
    </Button>
  );
}

export default ResumeLink;
