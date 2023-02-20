import { Box, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import {
  MailIcon,
  VerificationIcon,
  VoiceIcon,
  WhatsAppIcon,
} from '@/components/icons';
import PricingCard from '@/components/pricing/PricingCard';
import Apply from '@/components/sections/Apply';
import Communication from '@/components/sections/Communication';
import { Meta } from '@/layouts/Meta';
import { pricingAtom } from '@/recoil/atoms/pricesatom';
import usePrices from '@/services/hooks/use-prices';
import { Main } from '@/templates/Main';
import useMediaWidth from '@/utils/use-media-width';

const Index = () => {
  const { padding } = useMediaWidth();
  const { useGetPrices } = usePrices();

  const [pricingData, setPricingData] = useRecoilState(pricingAtom);

  const { data, isLoading } = useGetPrices();

  useEffect(() => {
    if (data) {
      // @ts-ignore
      setPricingData({ ...pricingData, countries: data.countries });
    }
  }, [isLoading, data]);

  return (
    <Main meta={<Meta title="SendChamp | pricing" description=" sendchamp " />}>
      {isLoading ? (
        <VStack>
          <Spinner color={'brand.primary'} />
          <Text>Fetching...</Text>
        </VStack>
      ) : (
        <Box px={padding} transform={'auto'} translateY={[0, '-10%']}>
          <SimpleGrid columns={[1, 3]} spacing={10}>
            <PricingCard Icon={VoiceIcon} />
            <PricingCard Icon={MailIcon} />
            <PricingCard Icon={WhatsAppIcon} />
            <PricingCard Icon={VerificationIcon} />
          </SimpleGrid>
        </Box>
      )}

      <Apply />
      <Communication />
    </Main>
  );
};

export default Index;
