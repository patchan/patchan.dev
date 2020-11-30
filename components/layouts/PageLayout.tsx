import React, { ReactNode } from 'react'
import { Container, useTheme } from '@chakra-ui/react'

type PageLayoutProps = {
  children?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      as='main'
      maxW={theme.sizes.width}
      px={{ base: 2, sm: 5, md: 10 }}
    >
      {children}
    </Container>
  );
}

export default PageLayout;
