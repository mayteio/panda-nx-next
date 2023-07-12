import { defineConfig } from '@pandacss/dev';
import { recipes, semanticTokens, tokens } from './src/theme';

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  outExtension: 'js',
  clean: true,
  include: [
    './apps/**/*.{ts,tsx}',
    './libs/**/*.{ts,tsx}',
    '../../apps/**/*.{ts,tsx}',
    '../../libs/**/*.{ts,tsx}',
  ],
  // include:
  //   process.env.NX_TASK_TARGET_TARGET === 'storybook'
  //     ? ['./apps/**/*.{ts,tsx}', './libs/**/*.{ts,tsx}']
  //     : ['../../apps/**/*.{ts,tsx}', '../../libs/**/*.{ts,tsx}'],
  outdir:
    process.env.NX_TASK_TARGET_TARGET === 'storybook'
      ? './libs/styled-system/src/__generated__'
      : '../../libs/styled-system/src/__generated__',
  exclude: [],

  // Customise theme here
  theme: {
    tokens,
    extend: {
      semanticTokens,
      recipes,
    },
  },
});
