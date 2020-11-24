import { Box } from '@chakra-ui/react';
import React from 'react';

type SubSectionProps = {
  children: React.ReactNode;
  id?: string;
}

const SubSection: React.FC<SubSectionProps> = ({ children, id }) => {

  return (
    <Box id={id} alignItems='center' justifyContent='center' pt={10} pb={20}>
      {children}
    </Box>
  );
}

export default SubSection;
