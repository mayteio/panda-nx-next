import { Button, TextField } from '@nx-integrated-monorepo/forms';
import { Box, Heading } from '@nx-integrated-monorepo/core';

export default function Index() {
  return (
    <Box m={4} p={6} border="1px solid" borderColor="light" borderRadius="md">
      <Heading mb="24px">Hello panda 🐼!</Heading>
      <Button mb="24px">Click me!</Button>
      <TextField label="Example text field" />
    </Box>
  );
}
