import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import { useAnimateSection } from '@/utils/use-animate-section';

const Communication = () => {
  const { ref, sectionVariants, control } = useAnimateSection();

  return (
    <Box
      as={motion.div}
      transition="0.3s linear"
      ref={ref}
      variants={sectionVariants}
      animate={control}
      initial="hidden"
      py={32}
      px={5}
      bg={'#fff'}
    >
      <Center flexDirection={'column'} h={'full'} alignItems={'center'}>
        <VStack justifyContent={'center'} spacing={7} mb={12}>
          <Text
            fontSize={'3xl'}
            textAlign={'center'}
            fontWeight={'bold'}
            fontFamily={'haffer'}
            color={'brand.black'}
            w={['full', '40%']}
          >
            Start building better communication experience with Sendchamp
          </Text>
          <Text
            fontSize={'lg'}
            textAlign={'center'}
            fontFamily={'dmsans'}
            fontWeight={'light'}
            color={'brand.black'}
            w={['full', '40%']}
          >
            Access a platform that is modernizing communications and making it
            possible for your customers to communicate with your business the
            same way they do with their friends and family.
          </Text>
        </VStack>
        <HStack spacing={[1, 5]}>
          <Button>Start for free</Button>
          <Button variant={'clear'}>Talk To Sales</Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default Communication;
