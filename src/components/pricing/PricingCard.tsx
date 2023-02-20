import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

const PricingCard = ({ Icon, price }: { Icon: React.FC; price?: any }) => {
  useEffect(() => {
    console.log({ price });
  }, [price]);
  return (
    <Box
      bg={'#fff'}
      border={'1px solid'}
      borderColor={'brand.outline'}
      rounded={'lg'}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition=".3s linear"
      // w={'full'}
    >
      <Box p={8}>
        <Stack spacing={4}>
          <Box rounded={'lg'} bg={'brand.primary'} p={3} w="max">
            <Icon />
          </Box>
          <Text fontFamily="haffer" color={'brand.black'} fontWeight={'bold'}>
            SMS
          </Text>
        </Stack>

        <HStack
          fontFamily="dmsans"
          color={'brand.black'}
          mt={7}
          justifyContent="space-between"
        >
          <Stack spacing={0}>
            <Text fontSize={'md'} fontWeight={'light'}>
              To Send SMS
            </Text>
            <Text fontWeight={'medium'} fontSize={'lg'}>
              NGN {price || '40'}
              <span className="text-base font-normal">/sms</span>
            </Text>
          </Stack>
          <VStack spacing={0} alignItems={'end'}>
            <Text fontSize={'md'} fontWeight={'light'}>
              To Receive SMS
            </Text>
            <Box bg={'brand.pale'} rounded={'full'} w={'max'} px={4} py={1}>
              <Text
                fontWeight={'normal'}
                textAlign={'center'}
                fontSize={'xs'}
                color={'brand.primary'}
              >
                Coming Soon
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Box>

      <Flex
        borderTop={'1px solid'}
        borderColor={'brand.outline'}
        justifyContent={'center'}
        alignItems={'center'}
        roundedBottom={'lg'}
        _hover={{ bg: '#daf3ff' }}
        p={7}
        cursor="pointer"
      >
        <Text
          textDecor={'underline'}
          fontWeight={'normal'}
          fontFamily={'haffer'}
          fontSize={'lg'}
          color={'brand.link'}
        >
          More details
        </Text>
      </Flex>
    </Box>
  );
};

export default PricingCard;
