import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  name: 'button',
  base: {
    borderRadius: '8px',
    color: 'reverse-heavy',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontFamily: 'body',
    transitionProperty: 'background, border-color',
    transitionDuration: '150ms',
    _disabled: {
      cursor: 'not-allowed',
    },
    _focus: {
      outline: 'none',
      _active: { _after: { display: 'none!' } },
      _after: {
        content: '""',
        border: '2px solid token(colors.heavy)',
        borderRadius: '12px',
        width: 'calc(100% + 8px)',
        height: 'calc(100% + 8px)',
        position: 'absolute',
        left: '-4px',
        top: '-4px',
      },
    },
  },
  variants: {
    visual: {
      branded: { bgGradient: 'brand' },
      default: {
        bg: 'heavy',
        _disabled: { bg: 'medium', color: 'reverse-light' },
      },
      destructive: { bg: 'error' },
      secondary: {
        border: '1px solid token(colors.light)',
        color: 'heavy',
        _hover: { bg: 'reverse-heavy' },
        _focus: {
          border: '3px solid token(colors.heavy)',
          _after: { display: 'none' },
        },
      },
      tertiary: { color: 'heavy', textDecoration: 'underline' },
    },
    size: {
      sm: { px: '16px', fontSize: '14px', height: '32px' },
      md: { px: '24px', fontSize: '16px', height: '48px' },
      lg: { px: '32px', fontSize: '18px', height: '56px' },
    },
  },
  compoundVariants: [
    { visual: 'secondary', size: 'sm', css: { _focus: { px: '14px' } } },
    { visual: 'secondary', size: 'md', css: { _focus: { px: '22px' } } },
    { visual: 'secondary', size: 'lg', css: { _focus: { px: '30px' } } },
  ],
  defaultVariants: {
    visual: 'default',
    size: 'md',
  },
});
