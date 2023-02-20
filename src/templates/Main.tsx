import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Header />
      {/* <Center> */}
      <Box className="w-full antialiased" py={5}>
        {props.children}
      </Box>
      {/* </Center> */}
      <Footer />
    </>
  );
};

export { Main };
