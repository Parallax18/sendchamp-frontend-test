import {
  Box,
  Center,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import useMediaWidth from '@/utils/use-media-width';

const footerdata = [
  {
    title: 'Products',
    routes: ['Channels/Router', 'Verification', 'No-Code Tools'],
  },
  {
    title: 'Solutions',
    routes: ['Onboard', 'Engage', 'Support', 'Retain'],
  },
  {
    title: 'Resources',
    routes: [
      'Developers',
      'API Reference',
      'Guides',
      'SDKs/Libraries',
      'Community',
      'Status Page',
      'Pricing',
    ],
  },
  {
    title: 'Company',
    routes: [
      'About Us',
      'Our Stories',
      'Careers',
      'Contact',
      'Terms Of Use',
      'Privacy',
    ],
  },
  {
    title: 'FOLLOW US',
    routes: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'],
  },
  {
    title: 'Contact us',
    routes: ['+234(0)18880261', 'sales@sendchamp.com', 'help@sendchamp.com'],
  },
];

const Footer = () => {
  const { mediaWidth } = useMediaWidth();
  return (
    <Box px={mediaWidth > 1440 ? 16 : 0} w={'full'}>
      <VStack
        px={[10, 32]}
        py={16}
        spacing={16}
        bg={'brand.dark'}
        flexDirection={'column'}
      >
        <SimpleGrid w={'full'} columns={[2, 6]} spacing={10}>
          {footerdata.map((item) => (
            <Stack key={item.title} spacing={4} fontSize={['sm', 'md']}>
              <Text color={'brand.grey'} fontFamily={'haffer'}>
                {item.title}
              </Text>
              {item.routes.map((route) => (
                <Stack
                  key={route}
                  cursor={'pointer'}
                  fontFamily={'dmsans'}
                  color={'brand.pale'}
                  fontSize={['xs', 'sm']}
                >
                  <Text w={'max'} _hover={{ color: 'brand.grey' }}>
                    {route}
                  </Text>
                </Stack>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
        <SimpleGrid
          borderY={'1px solid'}
          borderColor={'brand.grey'}
          p={3}
          px={10}
          columns={[1, 3]}
          spacing={10}
          w={'full'}
        >
          <Image
            w={200}
            h={100}
            alt={'sendchamp'}
            src={
              'https://res.cloudinary.com/sendchamp/image/upload/v1647472665/Sendchamp%20Website/logos/SendchampWhite_kelitk.svg'
            }
          />

          <HStack spacing={3}>
            <Image
              alt={'Nigerian flag'}
              src={
                'https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/homePage/Nigeria_xxb47e.svg'
              }
            />
            <Text color={'brand.pale'} fontSize={'sm'} fontFamily={'dmsans'}>
              142, Ahmadu Bello Way, Victoria Island, <br />
              Lagos, Nigeria
            </Text>
          </HStack>
          <HStack>
            <Image
              alt={'American flag'}
              src={
                'https://res.cloudinary.com/sendchamp/image/upload/v1647472668/Sendchamp%20Website/homePage/USA_ths9a7.svg'
              }
            />
            <Text color={'brand.pale'} fontSize={'sm'} fontFamily={'dmsans'}>
              2055 Limestone Rd STE 200-C Wilmington, <br /> DE 19808
            </Text>
          </HStack>
        </SimpleGrid>
        <Center>
          <Text color={'brand.grey'} textAlign={'center'} fontSize={'sm'}>
            Built with ❤️ for Sendchamp Inc Front end test. | Joshua Okechukwu
          </Text>
        </Center>
      </VStack>
    </Box>
  );
};

export default Footer;
