import { selectAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(selectAnatomy.build());

export const select = defineRecipe({
  name: 'select',
  description: 'A select style',
  base: parts({
    content: {
      background: 'white',
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'light',
      listStyle: 'none',
      maxW: 'calc(100vw - 1rem)',
      p: '1',
    },
    label: {
      color: 'heavy',
    },
    trigger: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'base',
      transitionDuration: '100',
      width: 'full',

      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
    option: {
      borderRadius: 'md',
      cursor: 'pointer',
      mb: '1',
      _hover: {
        background: 'bg.subtle',
      },
      _selected: {
        background: 'bg.subtle',
      },
      _focus: {
        background: 'bg.subtle',
      },
      _last: {
        mb: '0',
      },
    },
  }),
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
  variants: {
    variant: {
      outline: parts({
        trigger: {
          background: 'white',
          borderColor: 'light',
          borderRadius: 'lg',
          borderWidth: '1px',
          color: 'fg.default',
          textAlign: 'left',
          width: 'full',
          _focus: {
            zIndex: 1,
            '--shadow': {
              base: 'colors.orange.400',
              _dark: 'colors.orange.400',
            },
            boxShadow: 'inset 0 0 0 1px var(--shadow)',
            borderColor: 'accent.default',
          },
        },
      }),
    },
    size: {
      sm: parts({
        label: { fontSize: '12px', mr: 1 },
        trigger: { px: 4, h: '36px', fontSize: '14px' },
        content: { w: '2xs' },
        option: {
          fontSize: '14px',
          px: 4,
          h: '36px',
          display: 'flex',
          alignItems: 'center',
          _selected: {
            bg: 'reverse-heavy',
          },
        },
      }),
      md: parts({}),
      lg: parts({}),
    },
  },
});
