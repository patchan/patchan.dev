import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const theme = extendTheme({
  sizes: {
    width: '1200px'
  },
  colors: {
    text: {
      primary: '#000',
      secondary: '#696969'
    }
  },
  fonts: {
    header: 'Merriweather Sans',
    body: 'Open Sans',
    mono: 'Menlo'
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App
