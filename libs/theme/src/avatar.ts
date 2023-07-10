import { avatarAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(avatarAnatomy.build());

export const avatar = defineRecipe({
  name: 'avatar',
  base: parts({
    root: {
      w: '48px',
      h: '48px',
      bg: '#0E5832',
      borderRadius: 'md',
    },
    fallback: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      w: '48px',
      h: '48px',
      color: '#CBF3DF',
      fontFamily: 'branded',
      fontSize: '2xl',
      fontWeight: 'bold',
    },
  }),
});
