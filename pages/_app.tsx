import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const DEFAULT_BOX_SHADOW = '0px 1px 2px rgb(221 221 229 / 0.9), 0px 2px 4px rgb(221 221 229 / 0.9), 0px 4px 8px rgb(221 221 229 / 0.9), 0px 8px 16px rgb(221 221 229 / 0.5)';

const theme = extendTheme({
  sizes: {
    width: '1200px'
  },
  colors: {
    text: {
      primary: '#322659',
      secondary: '#535353',
      accent: '#44337A',
    }
  },
  shadows: {
    defaultBox: DEFAULT_BOX_SHADOW,
  }
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
