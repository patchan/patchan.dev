import { Box } from '@chakra-ui/react';
import React from 'react';

type SubSectionProps = {
  children: React.ReactNode;
}

const SubSection: React.FC<SubSectionProps> = ({ children }) => {

  return (
    <Box alignItems='center' justifyContent='center' py={20}>
      {children}
    </Box>
  );
}

export default SubSection;
