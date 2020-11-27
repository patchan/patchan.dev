import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const theme = extendTheme({
  sizes: {
    width: '1200px'
  },
  colors: {
    text: {
      primary: '#322659',
      secondary: '#696969',
      accent: '#553C9A',
    }
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
