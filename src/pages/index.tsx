import { Box, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
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

const services = [
  {
    type: 'SMS',
    subtext: ['To Send SMS', 'To Receive SMS'],
    sending_price: 'EUR 54.6500',
    unit: 'sms',
    icon: SmsIcon,
  },
  {
    type: 'Voice',
    subtext: ['To make Calls', 'To Receive Calls'],
    sending_price: 'EUR 165.0000',
    unit: 'sec',
    icon: VoiceIcon,
  },
  {
    type: 'Email',
    subtext: ['Price Per Mail'],
    sending_price: 'EUR 0.2000',
    unit: 'email',
    icon: MailIcon,
  },
  {
    type: 'Whatsapp',
    subtext: ['To Send Message', 'To Receive Message'],
    sending_price: 'EUR 2.5750',
    receiving_price: 'EUR 0.0000',
    unit: 'msg',
    icon: WhatsAppIcon,
  },

  {
    type: 'Verification',
    subtext: ['To Send OTP', 'To Confirm OTP'],
    sending_price: '0.0000',
    receiving_price: '200000.0000',
    unit: 'OTP',
    icon: VerificationIcon,
  },
];

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
            {services.map((service) => (
              <PricingCard
                key={service.type}
                unit={service.unit}
                receiving_price={service.receiving_price}
                sending_price={service.sending_price}
                subtext={service.subtext}
                type={service.type}
                Icon={service.icon}
              />
            ))}
          </SimpleGrid>
        </Box>
      )}

      <Apply />
      <Communication />
    </Main>
  );
};

export default Index;
