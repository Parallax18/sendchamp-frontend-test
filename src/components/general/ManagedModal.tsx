import {
  Box,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

import modalAtom from '@/recoil/atoms/modalAtom';

const ManagedModal = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { Icon, type, subtext, sending_price, unit, receiving_price } =
    modalState.modalProps!;
  return (
    <Modal
      isOpen={modalState.isOpen}
      onClose={() => setModalState({ ...modalState, isOpen: false })}
    >
      <ModalOverlay />
      <ModalContent rounded={'xl'}>
        <ModalHeader borderBottom={'1px solid'} borderColor={'brand.outline'}>
          <HStack>
            <Box rounded={'lg'} bg={'brand.primary'} p={4} w="max">
              <Icon />
            </Box>
            <Text fontFamily={'haffer'}>{type}</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={7} fontFamily={'dmsans'}>
          <VStack w={'full'}>
            <Flex w={'full'} justifyContent={'space-between'}>
              <Text fontSize={'base'}>{subtext[0]}</Text>
              <Text fontSize={'base'}>{subtext[1]}</Text>
            </Flex>
            <Flex
              w={'full'}
              justifyContent={'space-between'}
              alignItems={'center'}
              bg={'#eff4fe'}
              p={4}
            >
              <Stack spacing={0}>
                <Text>Starts at</Text>
                <Text fontWeight={'medium'} fontSize={'md'}>
                  {sending_price}
                  <span className="text-base font-normal">/{unit}</span>
                </Text>
              </Stack>

              {receiving_price ? (
                <Text fontWeight={'medium'} fontSize={'md'}>
                  {sending_price}
                  <span className="text-base font-normal">/{unit}</span>
                </Text>
              ) : (
                <Box bg={'#e0ebfd'} rounded={'full'} w={'max'} px={4} py={1}>
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
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManagedModal;
