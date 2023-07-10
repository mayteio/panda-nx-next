'use client';

import { Icon } from '@nx-integrated-monorepo/data-display';
import { Button, TextField } from '@nx-integrated-monorepo/forms';
import { VStack, styled } from '@nx-integrated-monorepo/styled-system';
import { FormEventHandler } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

export function Form() {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    alert('Submitted');
  };
  return (
    <styled.form w="100%" onSubmit={handleSubmit}>
      <VStack w="100%" alignItems="flex-start" gap={6}>
        <TextField label="Name" placeholder="Your name" w="100%" />
        <TextField label="Email" placeholder="Your email" w="100%" />
        <Button type="submit" visual="branded" w="100%">
          Create account <Icon as={MdArrowRightAlt} w={6} h={6} ml={1} />
        </Button>
      </VStack>
    </styled.form>
  );
}
