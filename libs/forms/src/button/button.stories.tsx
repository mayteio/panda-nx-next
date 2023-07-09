import { Button } from '.';
import { VStack, Flex } from '@nx-integrated-monorepo/styled-system';

export default { component: Button };
export const Variants = {
  args: {},
  render: () => (
    <VStack gap={6} w="xl">
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button size="sm">Click me</Button>
        <Button size="md">Click me</Button>
        <Button size="lg">Click me</Button>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button visual="branded" size="sm">
          Click me
        </Button>
        <Button visual="branded" size="md">
          Click me
        </Button>
        <Button visual="branded" size="lg">
          Click me
        </Button>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button visual="destructive" size="sm">
          Click me
        </Button>
        <Button visual="destructive" size="md">
          Click me
        </Button>
        <Button visual="destructive" size="lg">
          Click me
        </Button>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button visual="secondary" size="sm">
          Click me
        </Button>
        <Button visual="secondary" size="md">
          Click me
        </Button>
        <Button visual="secondary" size="lg">
          Click me
        </Button>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Button visual="tertiary" size="sm">
          Click me
        </Button>
        <Button visual="tertiary" size="md">
          Click me
        </Button>
        <Button visual="tertiary" size="lg">
          Click me
        </Button>
      </Flex>
    </VStack>
  ),
};
