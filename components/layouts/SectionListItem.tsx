import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/react'

type SectionListItemProps = {
  children?: ReactNode;
}

const SectionListItem: React.FC<SectionListItemProps> = ({ children }) => {
  return (
    <Stack as='li' w='100%'>
      {children}
    </Stack>
  );
}

export default SectionListItem;
