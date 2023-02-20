import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'medium',
    fontFamily: 'dmsans',
    background: 'brand.primary',
    borderRadius: 'md',
    paddingY: 7,
  },

  sizes: {
    lg: {
      w: 'max',
    },
  },

  variants: {
    primary: {
      color: '#fff',
      fontsize: 'xs',
    },
    clear: {
      bg: 'none',
      border: '1px solid',
      borderColor: 'brand.black',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});

export default Button;
