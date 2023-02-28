// TODO: remove when https://github.com/chakra-ui/panda/issues/971 resolved

import { defineConfig } from '@pandacss/dev';
import { tokens, recipes } from './libs/theme/src';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./apps/**/*.{ts,tsx}', './libs/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      recipes,
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'libs/styled-system/src/__generated__',
});
