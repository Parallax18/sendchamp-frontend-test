import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const PricingCard = ({
  Icon,
  type,
  subtext,
  sending_price,
  receiving_price,
  unit,
}: {
  Icon: React.FC;
  type: string;
  subtext: string[];
  sending_price: string;
  receiving_price?: string;
  unit: string;
}) => {
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
            {type}
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
              {subtext[0]}
            </Text>
            <Text fontWeight={'medium'} fontSize={'lg'}>
              {sending_price}
              <span className="text-base font-normal">/{unit}</span>
            </Text>
          </Stack>
          <VStack spacing={0} alignItems={'end'}>
            <Text fontSize={'md'} fontWeight={'light'}>
              {subtext[1]}
            </Text>
            {receiving_price ? (
              <Text fontWeight={'medium'} fontSize={'lg'}>
                {sending_price}
                <span className="text-base font-normal">/{unit}</span>
              </Text>
            ) : (
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
            )}
          </VStack>
        </HStack>
      </Box>

      {type === 'SMS' ||
        ('Whatsapp' && (
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
        ))}
    </Box>
  );
};

export default PricingCard;
