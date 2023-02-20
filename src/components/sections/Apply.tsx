import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import { useAnimateSection } from '@/utils/use-animate-section';
import useMediaWidth from '@/utils/use-media-width';

const Apply = () => {
  const { mediaWidth } = useMediaWidth();
  const { ref, sectionVariants, control } = useAnimateSection();
  return (
    <Box
      as={motion.div}
      transition="0.3s linear"
      ref={ref}
      variants={sectionVariants}
      animate={control}
      initial="hidden"
      px={mediaWidth > 1440 ? 16 : 0}
      w={'full'}
    >
      <Center
        py={32}
        bg={'brand.pale'}
        flexDirection={'column'}
        h={'full'}
        alignItems={'center'}
      >
        <VStack justifyContent={'center'} spacing={7} mb={10}>
          <Text
            fontSize={'3xl'}
            textAlign={'center'}
            fontWeight={'bold'}
            fontFamily={'haffer'}
            color={'brand.black'}
          >
            Sendchamp for Startups
          </Text>
          <Text
            fontSize={'lg'}
            textAlign={'center'}
            fontFamily={'dmsans'}
            fontWeight={'light'}
            color={'brand.black'}
            w={'70%'}
          >
            Apply for $1,000 in credits, if you are a startup that is less than
            3 years old with less than $500k in total funding.
          </Text>
        </VStack>
        <Button>Apply now</Button>
      </Center>
    </Box>
  );
};

export default Apply;
