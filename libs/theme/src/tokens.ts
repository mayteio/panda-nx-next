import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  colors: {
    monochrome: {
      50: { value: '#FFF' },
      100: { value: '#F7F7F766' },
      200: { value: '#F7F7F799' },
      300: { value: '#F7F7F7' },
      400: { value: '#EBEBEB' },
      500: { value: '#B0B0B0' },
      600: { value: '#22222266' },
      700: { value: '#22222299' },
      800: { value: '#222' },
      900: { value: '#0F0F0F' },
    },
    green: { value: '#4DBC5D' },
    orange: { value: '#FF9B53' },
    coral: { value: '#FA635D' },
  },
  gradients: {
    // string value
    brand: { value: 'linear-gradient(to right, #08AABF, #4DBC5D)' },
  },
  fonts: {
    branded: { value: 'var(--font-recoleta), Menlo, monospace' },
    default: { value: 'var(--font-proxima-nova), sans-serif' },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    heavy: {
      value: {
        base: '{colors.monochrome.800}',
        _dark: '{colors.monochrome.300}',
      },
    },
    medium: {
      value: {
        base: '{colors.monochrome.700}',
        _dark: '{colors.monochrome.200}',
      },
    },
    light: {
      value: {
        base: '{colors.monochrome.600}',
        _dark: '{colors.monochrome.100}',
      },
    },
    'reverse-heavy': {
      value: {
        base: '{colors.monochrome.300}',
        _dark: '{colors.monochrome.800}',
      },
    },
    'reverse-medium': {
      value: {
        base: '{colors.monochrome.200}',
        _dark: '{colors.monochrome.700}',
      },
    },
    'reverse-light': {
      value: {
        base: '{colors.monochrome.100}',
        _dark: '{colors.monochrome.600}',
      },
    },
    success: {
      value: { base: '{colors.green}', _dark: '{colors.green}' },
    },
    warning: {
      value: { base: '{colors.orange}', _dark: '{colors.orange}' },
    },
    error: {
      value: { base: '{colors.coral}', _dark: '{colors.coral}' },
    },
  },
});
