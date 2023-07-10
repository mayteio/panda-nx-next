import { Box, Flex, FlexProps } from '@nx-integrated-monorepo/styled-system';
import { forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, FlexProps>(function Card(
  props,
  ref
) {
  return (
    <Flex
      ref={ref}
      w="100%"
      maxW={{ md: '820px' }}
      flexDir={{ base: 'column', md: 'row' }}
      bg="white"
      borderRadius="md"
      border="1px solid token(colors.border.light)"
      {...props}
    />
  );
});

export function CardImage() {
  return (
    <Box
      bg="green.lightest"
      w={{ base: '100%', md: '206px' }}
      h={{ base: '150px', md: '100%' }}
      borderTopLeftRadius="md"
      borderBottomLeftRadius={{ md: 'md' }}
      borderTopRightRadius={{ base: 'md', md: 0 }}
    />
  );
}

export const CardContent = forwardRef<HTMLDivElement, FlexProps>(
  function CardContent(props, ref) {
    return (
      <Flex
        ref={ref}
        flexDir="column"
        p={{ base: 6, md: 8 }}
        w="100%"
        {...props}
      />
    );
  }
);
