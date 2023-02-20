import {
  Box,
  Flex,
  Input,
  ScaleFade,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsDash } from 'react-icons/bs';

const DropDownSelect = ({
  options,
  withCurr,
}: {
  options?: any[];
  withCurr?: boolean;
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    // @ts-ignore
    ref,
    handler: () => onClose(),
  });

  return (
    <Box position={'relative'} w={'full'}>
      <Flex
        onClick={onToggle}
        border={'1px solid'}
        borderColor={'brand.outline'}
        rounded={'lg'}
        alignItems={'center'}
        _focusWithin={{ border: '2px solid', borderColor: 'brand.primary' }}
        transition={'all linear'}
        bg={'#fff'}
        p={2}
      >
        <Input
          _focusVisible={{ outline: 'none', border: 'none' }}
          outline={'none'}
          border={'none'}
          color={'#000'}
          fontFamily={'dmsans'}
          cursor={'default'}
          // defaultValue={options[0].country}
        />
        <BiChevronDown />
      </Flex>

      <ScaleFade
        in={isOpen}
        initialScale={0.9}
        className={'absolute z-50 w-full'}
      >
        <Box
          ref={ref}
          bg={'#fff'}
          border={'1px solid'}
          borderColor={'brand.pale'}
          mt={2}
          py={1}
          rounded={'md'}
          shadow={'md'}
          w={'full'}
        >
          <Stack
            fontFamily={'dmsans'}
            color={'brand.black'}
            height={'15rem'}
            overflowY={'scroll'}
          >
            {options?.map((country) => (
              <Box
                key={country.id}
                p={3}
                _hover={{ bg: 'brand.outline' }}
                cursor={'pointer'}
                // onClick={() => onSelect(country.id)}
              >
                <Flex alignItems={'center'}>
                  <Text textTransform={'capitalize'}>{country.name}</Text>
                  {withCurr && (
                    <>
                      <BsDash />
                      <Text>{country.currency_abbreviation}</Text>
                    </>
                  )}
                </Flex>
              </Box>
            ))}
          </Stack>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default DropDownSelect;
