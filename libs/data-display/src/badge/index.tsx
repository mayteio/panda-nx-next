import { Text, TextProps } from '@nx-integrated-monorepo/core';
import { forwardRef } from 'react';

export const Badge = forwardRef<HTMLParagraphElement, TextProps>(function Badge(
  props,
  ref
) {
  return (
    <Text
      ref={ref}
      as="span"
      display="flex"
      h="28px"
      px={2}
      alignItems="center"
      borderRadius="80px"
      bg="black"
      color="white"
      fontWeight="bold"
      {...props}
    />
  );
});
