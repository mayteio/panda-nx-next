import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  colors: {
    green: {
      grey: { value: 'rgba(217, 232, 229, 1)' },
      lightest: { value: 'rgba(219, 242, 223, 1)' },
      light: { value: 'rgba(165, 228, 174, 1)' },
      DEFAULT: { value: 'rgba(77, 188, 93, 1)' },
      dark: { value: 'rgba(18, 135, 75, 1)' },
      darkest: { value: 'rgba(14, 88, 50, 1)' },
      'dark-transparent': { value: 'rgba(18, 135, 75, 0.15)' },
      transparent: { value: 'rgba(77, 188, 93, 0.2)' },
      'transparent-2': { value: 'rgba(77, 188, 93, 0.1)' },
    },
    blue: {
      grey: { value: 'rgba(112, 140, 164, 1)' },
      lightest: { value: 'rgba(171, 241, 250, 1)' },
      light: { value: 'rgba(130, 224, 237, 1)' },
      default: { value: 'rgba(8, 170, 191, 1)' },
      dark: { value: 'rgba(23, 125, 138, 1)' },
      darkest: { value: 'rgba(22, 95, 105, 1)' },
    },
    teal: {
      grey: { value: 'rgba(145, 180, 176, 1)' },
      lightest: { value: 'rgba(178, 246, 239, 1)' },
      light: { value: 'rgba(81, 215, 200, 1)' },
      default: { value: 'rgba(0, 166, 148, 1)' },
      dark: { value: 'rgba(10, 143, 152, 1)' },
      darkest: { value: 'rgba(20, 61, 60, 1)' },
    },
    yellow: {
      default: { value: 'rgba(239, 227, 114, 1)' },
      dark: { value: 'rgba(213, 203, 103, 1)' },
    },
    orange: {
      default: { value: 'rgba(255, 155, 83, 1)' },
      dark: { value: 'rgba(218, 132, 71, 1)' },
      transparent: { value: 'rgba(255, 155, 83, 0.2)' },
      'transparent-2': { value: 'rgba(255, 155, 83, 0.1)' },
    },
    coral: {
      default: { value: 'rgba(250, 99, 93, 1)' },
      dark: { value: 'rgba(158, 12, 12, 1)' },
      transparent: { value: 'rgba(250, 99, 93, 0.4)' },
    },
    black: {
      default: { value: 'rgba(0,0,0)' },
      darkest: { value: 'rgba(0,0,0)' },
      dark: { value: 'rgba(15,15,15,1)' },
      light: { value: 'rgba(20,20,20,1)' },
      lightest: { value: 'rgba(24,24,24,1)' },
      25: { value: 'rgba(0,0,0,0.25)' },
      50: { value: 'rgba(0,0,0,0.5)' },
      60: { value: 'rgba(0,0,0,0.6)' },
      70: { value: 'rgba(0,0,0,0.7)' },
    },
    white: {
      default: { value: 'rgba(255, 255, 255)' },
      80: { value: 'rgba(255, 255, 255, 0.8)' },
      60: { value: 'rgba(255, 255, 255, 0.6)' },
      40: { value: 'rgba(255, 255, 255, 0.4)' },
      10: { value: 'rgba(255, 255, 255, 0.1)' },
      4: { value: 'rgba(255, 255, 255, 0.04)' },
      2: { value: 'rgba(255, 255, 255, 0.02)' },
    },
    grey: {
      lightest: { value: 'rgba(247, 247, 247, 1)' },
      'lightest-60': { value: 'rgba(247, 247, 247, 0.6)' },
      'lightest-40': { value: 'rgba(247, 247, 247, 0.4)' },
      'lightest-30': { value: 'rgba(247, 247, 247, 0.3)' },
      'lightest-15': { value: 'rgba(247, 247, 247, 0.15)' },
      light: { value: 'rgba(235, 235, 235, 1)' },
      grey: { value: 'rgba(221, 221, 221, 1)' },
      default: { value: 'rgba(176, 176, 176, 1)' },
      dark: { value: 'rgba(113, 113, 113, 1)' },
      background: { value: 'rgba(53, 59, 70, 1)' },
      darkest: { value: 'rgba(34, 34, 34, 1)' },
      black: { value: 'rgba(0, 0, 0, 1)' },
      60: { value: 'rgba(34, 34, 34, 0.6)' },
      40: { value: 'rgba(34, 34, 34, 0.4)' },
      30: { value: 'rgba(34, 34, 34, 0.3)' },
      10: { value: 'rgba(34, 34, 34, 0.1)' },
      4: { value: 'rgba(34, 34, 34, 0.04)' },
      2: { value: 'rgba(34, 34, 34, 0.02)' },
    },
    opacity: {
      100: { value: 'rgba(0, 0, 0, 1)' },
      90: { value: 'rgba(0, 0, 0, 0.9)' },
      80: { value: 'rgba(0, 0, 0, 0.8)' },
      70: { value: 'rgba(0, 0, 0, 0.7)' },
      60: { value: 'rgba(0, 0, 0, 0.6)' },
      50: { value: 'rgba(0, 0, 0, 0.5)' },
      40: { value: 'rgba(0, 0, 0, 0.4)' },
      30: { value: 'rgba(0, 0, 0, 0.3)' },
      20: { value: 'rgba(0, 0, 0, 0.2)' },
      10: { value: 'rgba(0, 0, 0, 0.1)' },
      0: { value: 'rgba(0, 0, 0, 0)' },
    },
  },
  gradients: {
    brand: { value: 'linear-gradient(to right, #08AABF, #4DBC5D)' },
  },
  fonts: {
    branded: { value: 'var(--font-recoleta)' },
    body: { value: 'var(--font-proxima-nova)' },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    text: {
      heavy: {
        value: {
          base: '{colors.grey.darkest}',
          _dark: '{colors.grey.lightest}',
        },
      },
      medium: {
        value: {
          base: '{colors.grey.60}',
          _dark: '{colors.grey.lightest-60}',
        },
      },
      light: {
        value: {
          base: '{colors.grey.40}',
          _dark: '{colors.grey.lightest-40}',
        },
      },
      'reverse-heavy': {
        value: {
          base: '{colors.grey.lightest}',
          _dark: '{colors.grey.darkest}',
        },
      },
      'reverse-medium': {
        value: {
          base: '{colors.grey.lightest-60}',
          _dark: '{colors.grey.60}',
        },
      },
      'reverse-light': {
        value: {
          base: '{colors.grey.lightest-40}',
          _dark: '{colors.grey.40}',
        },
      },
      'white-heavy': {
        value: {
          base: '{colors.grey.lightest}',
          _dark: '{colors.grey.lightest}',
        },
      },
      'white-medium': {
        value: {
          base: '{colors.white.60}',
          _dark: '{colors.white.60}',
        },
      },
      'white-light': {
        value: {
          base: '{colors.grey.lightest-40}',
          _dark: '{colors.grey.lightest-40}',
        },
      },
      success: {
        value: {
          base: '{colors.green}',
          _dark: '{colors.green}',
        },
      },
      warning: {
        value: {
          base: '{colors.orange}',
          _dark: '{colors.orange}',
        },
      },
      error: {
        value: {
          base: '{colors.coral}',
          _dark: '{colora.coral}',
        },
      },
    },
    icon: {
      heavy: {
        value: {
          base: '{colors.grey.darkest}',
          _dark: '{colors.grey.lightest}',
        },
      },
      medium: {
        value: {
          base: '{colors.grey.60}',
          _dark: '{colors.grey.lightest-60}',
        },
      },
      light: {
        value: {
          base: '{colors.grey.40}',
          _dark: '{colors.grey.lightest-40}',
        },
      },
      'reverse-heavy': {
        value: {
          base: '{colors.grey.lightest}',
          _dark: '{colors.grey.darkest}',
        },
      },
      'reverse-medium': {
        value: {
          base: '{colors.grey.lightest-60}',
          _dark: '{colors.grey.60}',
        },
      },
      'reverse-light': {
        value: {
          base: '{colors.grey.lightest-40}',
          _dark: '{colors.grey.40}',
        },
      },
      'white-heavy': {
        value: {
          base: '{colors.grey.lightest}',
          _dark: '{colors.grey.lightest}',
        },
      },
      'white-medium': {
        value: {
          base: '{colors.white.60}',
          _dark: '{colors.white.60}',
        },
      },
      'white-light': {
        value: {
          base: '{colors.grey.lightest-40}',
          _dark: '{colors.grey.lightest-40}',
        },
      },
      success: {
        value: {
          base: '{colors.green}',
          _dark: '{colors.green}',
        },
      },
      warning: {
        value: {
          base: '{colors.orange}',
          _dark: '{colors.orange}',
        },
      },
      error: {
        value: {
          base: '{colors.coral}',
          _dark: '{colors.coral}',
        },
      },
    },
    border: {
      heavy: {
        value: {
          base: '{colors.grey.darkest}',
          _dark: '{colors.grey.lightest}',
        },
      },
      medium: {
        value: {
          base: '{colors.grey.30}',
          _dark: '{colors.grey.lightest-30}',
        },
      },
      light: {
        value: {
          base: '{colors.grey.10}',
          _dark: '{colors.grey.lightest-15}',
        },
      },
      'reverse-heavy': {
        value: {
          base: '{colors.grey.lightest}',
          _dark: '{colors.grey.darkest}',
        },
      },
      'reverse-medium': {
        value: {
          base: '{colors.grey.lightest-60}',
          _dark: '{colors.grey.30}',
        },
      },
      'reverse-light': {
        value: {
          base: '{colors.grey.lightest-30}',
          _dark: '{colors.grey.10}',
        },
      },
      success: {
        value: {
          base: '{colors.green}',
          _dark: '{colors.green}',
        },
      },
      warning: {
        value: {
          base: '{colors.orange}',
          _dark: '{colors.orange}',
        },
      },
      error: {
        value: {
          base: '{colors.coral}',
          _dark: '{colors.coral}',
        },
      },
    },
    backdrop: {
      'level-0': {
        value: {
          base: '{colors.white}',
          _dark: '{colors.black.dark}',
        },
      },
      'level-1': {
        value: {
          base: '{colors.white}',
          _dark: '{colors.black.light}',
        },
      },
      'level-2': {
        value: {
          base: '{colors.white}',
          _dark: '{colors.black.lightest}',
        },
      },
      'level-3': {
        value: {
          base: '{colors.white}',
          _dark: '{colors.grey.darkest}',
        },
      },
    },
    surface: {
      'level-1': {
        value: {
          base: '{colors.white}',
          _dark: '{colors.black.dark}',
        },
      },
      'level-2': {
        value: {
          base: '{colors.grey}',
          _dark: '{colors.grey.dark}',
        },
      },
      'level-3': {
        value: {
          base: '{colors.black.lightest}',
          _dark: '{colors.grey.grey}',
        },
      },
      'level-4': {
        value: {
          base: '{colors.black.dark}',
          _dark: '{colors.white}',
        },
      },
      success: {
        value: {
          base: '{colors.green}',
          _dark: '{colors.green}',
        },
      },
      warning: {
        value: {
          base: '{colors.orange}',
          _dark: '{colors.orange}',
        },
      },
      error: {
        value: {
          base: '{colors.coral}',
          _dark: '{colors.coral}',
        },
      },
      green: {
        value: {
          base: '{colors.green.grey}',
          _dark: '{colors.teal.darkest}',
        },
      },
      white: {
        value: {
          base: '{colors.white}',
          _dark: '{colors.white}',
        },
      },
    },
    state: {
      overlay: {
        value: {
          base: '{colors.white.80}',
          _dark: '{colors.black.70}',
        },
      },
      highlight: {
        value: {
          base: '{colors.grey.2}',
          _dark: '{colors.white.2}',
        },
      },
      hover: {
        value: {
          base: '{colors.grey.4}',
          _dark: '{colors.white.4}',
        },
      },
      active: {
        value: {
          base: '{colors.green.dark-transparent}',
          _dark: '{colors.green.dark-transparent}',
        },
      },
    },
    alert: {
      error: {
        value: {
          base: 'rgba(250, 99, 93, 0.2)',
          _dark: 'rgba(250, 99, 93, 0.1)',
        },
      },
      success: {
        value: {
          base: '{colors.green.transparent}',
          _dark: '{colors.green.transparent-2}',
        },
      },
      warning: {
        value: {
          base: '{colors.orange.transparent}',
          _dark: '{colors.orange.transparent-2}',
        },
      },
    },
    button: {
      'monochrome-default': {
        value: {
          base: '{colors.grey.darkest}',
          _dark: '{colors.white}',
        },
      },
      'monochrome-hover': {
        value: {
          base: '{colors.black}',
          _dark: '{colors.white}',
        },
      },
      'monochrome-disabled': {
        value: {
          base: '{colors.grey.40}',
          _dark: '{colors.white.40}',
        },
      },
      'destructive-default': {
        value: {
          base: '{colors.coral}',
          _dark: '{colors.coral}',
        },
      },
      'destructive-hover': {
        value: {
          base: '{colors.coral}',
          _dark: '{colors.coral}',
        },
      },
      'destructive-disabled': {
        value: {
          base: '{colors.coral.transparent}',
          _dark: '{colors.coral.transparent}',
        },
      },
    },
  },
  shadow: {
    1: {
      value: {
        base: '0px 1px 2px rgba(0, 0, 0, 0.1)',
        _dark:
          'inset 0px 0px 1px rgba(255, 255, 255, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.25)',
      },
    },
    2: {
      value: {
        base: '0px 0px 2px rgba(0, 0, 0, 0.1)',
        _dark:
          'inset 0px 0px 1px rgba(255, 255, 255, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
    3: {
      value: {
        base: '0px 0px 2px rgba(0, 0, 0, 0.1)',
        _dark:
          'inset 0px 0px 1px rgba(255, 255, 255, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.6), 0px 4px 8px rgba(0, 0, 0, 0.5)',
      },
    },
  },
});
