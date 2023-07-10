import { Flex, Heading, Text } from '@nx-integrated-monorepo/core';
import { Form } from './form';

export function CreateAccountForm() {
  return (
    <Flex flexDir="column">
      <Heading size="h5">Create account</Heading>
      <Text mb={8}>
        Create an account with Pachama to manage all your projects in one place
        and track their progress.
      </Text>
      <Form />
    </Flex>
  );
}
