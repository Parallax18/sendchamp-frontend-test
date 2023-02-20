import { extendTheme } from '@chakra-ui/react';

import Button from './Button';

export const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    haffer: `'haffer', 'sans-serif'`,
    poppins: `'Poppins', 'sans-serif'`,
    dmsans: `'DM Sans', 'sans-serif'`,
  },
  colors: {
    brand: {
      pale: '#eff4fe',
      primary: '#197eef',
      outline: '#aaccf9',
      black: '#1a202c',
      link: '#0655a7',
      dark: '#0d243f',
      grey: '#68798d',
    },
  },
});
