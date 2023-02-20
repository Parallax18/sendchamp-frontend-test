import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import DropDownSelect from '@/components/general/DropDownSelect';
import useMediaWidth from '@/utils/use-media-width';

const Header = () => {
  const { mediaWidth } = useMediaWidth();
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
          className={'space-y-2'}
        >
          <DropDownSelect
          // options={countries}
          // onSelect={(country) =>
          //   setPricingData({ ...pricingData, receivingCountry: country })
          // }
          />
          <DropDownSelect
            // options={countries}
            // onSelect={(country) =>
            //   setPricingData({ ...pricingData, sendingCountry: country })
            // }
            withCurr
          />
        </HStack>
      </Center>
    </Box>
  );
};

export default Header;
