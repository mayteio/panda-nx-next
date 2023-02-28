import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  name: 'button',
  base: {
    px: 4,
    py: 3,
    bg: 'black',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '8px',
  },
});
