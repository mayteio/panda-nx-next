import { PropsWithChildren } from 'react';
import { Flex, FlexProps } from './patterns';

export function SplitScreenContainer(props: FlexProps) {
  return (
    <Flex
      flexDir="column"
      h={{ md: '100vh' }}
      minH={{ base: '100vh' }}
      {...props}
    />
  );
}

export function SplitScreenLayout({ children }: PropsWithChildren) {
  return (
    <Flex
      overflowX={{ md: 'hidden' }}
      flexGrow={1}
      flexDir={{ base: 'column', md: 'row' }}
    >
      {children}
    </Flex>
  );
}

export function SplitScreenMain(props: FlexProps) {
  return (
    <Flex
      w={{ base: '100%', lg: '50%' }}
      h={{ lg: '100%' }}
      overflowY={{ md: 'auto' }}
      justifyContent="center"
      alignItems="inherit"
      bgColor="white"
      role="main"
      {...props}
    />
  );
}

export function SplitScreenContent(props: FlexProps) {
  return (
    <Flex
      flexDir="column"
      px={{ base: 4, sm: '52px' }}
      py={{ base: 12, sm: '52px' }}
      my="auto"
      w="100%"
      maxW="600px"
      {...props}
    />
  );
}

export function SplitScreenAside(props: FlexProps) {
  return (
    <Flex
      w={{ base: '100%', lg: '50%' }}
      h={{ md: '100%' }}
      overflowY={{ md: 'auto' }}
      justifyContent="center"
      alignItems="center"
      role="complementary"
      flexGrow={1}
      {...props}
    />
  );
}
