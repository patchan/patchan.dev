import { Box } from '@chakra-ui/react';
import React from 'react';

type SubSectionProps = {
  children: React.ReactNode;
  id?: string;
}

const SubSection: React.FC<SubSectionProps> = ({ children, id }) => {

  return (
    <Box as='section' id={id} alignItems='center' justifyContent='center' py={20}>
      {children}
    </Box>
  );
}

export default SubSection;
