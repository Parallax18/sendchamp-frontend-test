import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import DropDownSelect from '@/components/general/DropDownSelect';
import usePrices from '@/services/hooks/use-prices';
import useMediaWidth from '@/utils/use-media-width';

const Header = () => {
  const { mediaWidth } = useMediaWidth();
  // const [pricingData] = useRecoilState(pricingAtom);
  const { useGetPrices } = usePrices();
  const { data } = useGetPrices();

  return (
    <Box mx={mediaWidth > 1440 ? 16 : 0} px={5} bg={'brand.pale'} py={20}>
      <Center flexDirection={'column'} h={'full'}>
        <VStack alignItems={'center'} w={['full', '40%']}>
          <Text
            fontSize={['3xl', '5xl']}
            textAlign={'center'}
            fontWeight={'bold'}
            fontFamily={'haffer'}
          >
            Pricing for every <br />
            business
          </Text>
          <Text fontSize={'lg'} textAlign={'center'} fontFamily={'dmsans'}>
            No hidden fees or charges - simple & flexible pricing that fits with
            your business at any stage.
          </Text>
        </VStack>
        <HStack
          flexDirection={['column', 'row']}
          justifyContent={'center'}
          spacing={[0, 4]}
          mt={20}
          className={'space-y-2 md:space-y-0'}
        >
          <DropDownSelect options={data?.countries} />
          <DropDownSelect options={data?.countries} withCurr />
        </HStack>
      </Center>
    </Box>
  );
};

export default Header;
