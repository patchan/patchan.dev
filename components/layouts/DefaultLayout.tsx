import React, { ReactNode } from 'react'
import { Container, useTheme } from '@chakra-ui/react'

type PageLayoutProps = {
  children?: ReactNode;
}

const PageLayout: React.FC = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  return (
    <Container maxW={theme.sizes.width} minH='100vh' px={6}>
      {children}
      {/* <Footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </Footer> */}
    </Container>
  );
}

export default PageLayout;
