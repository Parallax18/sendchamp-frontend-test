import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  MailIcon,
  SmsIcon,
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
  const [countries, setCountries] = useState();
  const [pricingData] = useRecoilState(pricingAtom);

  const { data, isLoading } = useGetPrices();

  useEffect(() => {
    console.log({ data });
    // setCountries([data]);
    if (data) {
      // @ts-ignore
      setCountries(data.countries);
      console.log({ countries });
    }
    // setCountriesWithCurrency();
  }, [isLoading, data]);

  useEffect(() => {
    console.log({ pricingData });
  }, [pricingData]);

  return (
    <Main meta={<Meta title="SendChamp | pricing" description=" bob's " />}>
      {/* {data && ( */}
      {/*  <HStack justifyContent={'center'} spacing={4}> */}
      {/*    <DropDownSelect */}
      {/*      options={countries} */}
      {/*      onSelect={(country) => */}
      {/*        setPricingData({ ...pricingData, receivingCountry: country }) */}
      {/*      } */}
      {/*    /> */}
      {/*    <DropDownSelect */}
      {/*      options={countries} */}
      {/*      onSelect={(country) => */}
      {/*        setPricingData({ ...pricingData, sendingCountry: country }) */}
      {/*      } */}
      {/*      withCurr */}
      {/*    /> */}
      {/*  </HStack> */}
      {/* )} */}
      <Box px={padding} transform={'auto'} translateY={[0, '-10%']}>
        <SimpleGrid columns={[1, 3]} spacing={10}>
          <PricingCard
            Icon={SmsIcon}
            // price={
            //   pricingData?.receivingCountry?.prices.sms[
            //     pricingData?.sendingCountry?.country
            //   ]
            // }
          />
          <PricingCard Icon={VoiceIcon} />
          <PricingCard Icon={MailIcon} />
          <PricingCard Icon={WhatsAppIcon} />
          <PricingCard Icon={VerificationIcon} />
        </SimpleGrid>
      </Box>

      <Apply />
      <Communication />
    </Main>
  );
};

export default Index;
