import React, { ReactNode } from 'react'
import { Stack, useTheme } from '@chakra-ui/react'

type SectionListItemProps = {
  children?: ReactNode;
}

const SectionListItem: React.FC<SectionListItemProps> = ({ children }) => {
  const theme = useTheme();
  
  return (
    <Stack
      as='li'
      w='100%'
      p={{ base: '1rem', sm: 8, md: 8, lg: 10 }}
      boxShadow={theme.shadows.defaultBox}
      borderRadius={8}
    >
      {children}
    </Stack>
  );
}

export default SectionListItem;
