import { defineConfig } from '@pandacss/dev';
import {
  recipes,
  semanticTokens,
  tokens,
  textStyles,
} from '@nx-integrated-monorepo/theme';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx}', '../../libs/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    semanticTokens,
    extend: {
      tokens,
      recipes,
      textStyles,
    },
  },

  jsxFramework: 'react',

  outExtension: 'js',
  clean: true,
  // The output directory for your css system
  outdir: '../../libs/styled-system/src/__generated__',
});
