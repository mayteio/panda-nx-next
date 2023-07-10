import { avatarAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(avatarAnatomy.build());

export const avatar = defineRecipe({
  name: 'avatar',
  base: parts({
    root: {
      w: '48px',
      h: '48px',
      bg: 'green.darkest',
      borderRadius: 'md',
    },
    fallback: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      w: '48px',
      h: '48px',
      color: 'green.lightest',
      fontFamily: 'branded',
      fontSize: '2xl',
      fontWeight: 'bold',
    },
  }),
});
