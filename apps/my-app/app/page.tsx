import { Button, TextField } from '@nx-integrated-monorepo/forms';
import { Box, Heading } from '@nx-integrated-monorepo/core';

export default function Index() {
  return (
    <Box m={4} p={6} border="1px solid" borderColor="light" borderRadius="md">
      <Heading mb="24px">Hello panda 🐼!</Heading>
      <TextField mb="24px" label="Example text field" />
      <Button>Click me!</Button>
    </Box>
  );
}
