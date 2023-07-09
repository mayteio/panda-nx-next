import { editableAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(editableAnatomy.build());

export const textField = defineRecipe({
  name: 'textField',
  base: parts({
    root: { maxW: '320px', fontFamily: 'body' },
    label: { fontSize: '14px' },
    area: {
      border: '1px solid',
      borderColor: 'light',
      borderRadius: '8px',
      h: '56px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      h: '100%',
      w: '100%',
      px: '16px',
    },
    preview: {
      h: '100%',
      w: '100%',
      px: '16px',
      lineHeight: '54px',
      cursor: 'text',
    },
  }),
  jsx: ['TextField'],
});
