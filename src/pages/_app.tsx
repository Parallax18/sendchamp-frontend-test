import '../styles/global.css';
import '../assets/fonts/DP_haffer/haffer.css';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { theme } from '@/components/themed/chakra.theme';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  </RecoilRoot>
);

export default MyApp;
