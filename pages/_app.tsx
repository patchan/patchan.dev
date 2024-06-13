import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
import { AppProps } from 'next/dist/shared/lib/router/router';

const LIGHT_BOX_SHADOW = '0px 1px 2px rgb(221 221 229 / 0.9), 0px 2px 4px rgb(221 221 229 / 0.9), 0px 4px 8px rgb(221 221 229 / 0.9), 0px 8px 16px rgb(221 221 229 / 0.5)';
const DARK_BOX_SHADOW = '0px 1px 2px rgb(10 10 10 / 0.9), 0px 2px 4px rgb(10 10 10 / 0.9), 0px 4px 8px rgb(10 10 10 / 0.9), 0px 8px 16px rgb(10 10 10 / 0.5)';

const theme = extendTheme({
  sizes: {
    width: '1200px'
  },
  colors: {
    text: {
      primary: '#322659',
      secondary: '#535353',
      accent: '#44337A',
    },
    dark: {
      text: {
        primary: '#fff',
        secondary: '#aaa',
      },
      background: {
        main: '#171717',
        card: '#212121',
      }
    }
  },
  shadows: {
    boxLight: LIGHT_BOX_SHADOW,
    boxDark: DARK_BOX_SHADOW,
  },
  styles: {
    global: (props: Dict) => ({
      'html, body': {
        bg: mode('white', '#171717')(props),
        color: mode('#111', '#fff')(props),
      }
    })
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
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
