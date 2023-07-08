'use client';

import { ComponentProps, forwardRef } from 'react';

import { Pressable } from '@ark-ui/react';
import {
  RecipeVariantProps,
  styled,
  button,
} from '@nx-integrated-monorepo/styled-system';

export type ButtonProps = ComponentProps<typeof Pressable> &
  RecipeVariantProps<typeof button>;

export const Button = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    return <Pressable ref={ref} {...props} />;
  }),
  button
);
