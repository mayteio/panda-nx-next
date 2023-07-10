import { Flex, Heading } from '@nx-integrated-monorepo/core';
import Link from 'next/link';

export function Topbar() {
  return (
    <Flex py="16px" px="32px" borderBottom="1px solid token(colors.light)">
      <Link href="/">
        <Heading
          size="subtitle1"
          fontFamily="body"
          h="32px"
          lineHeight="32px"
          fontWeight="bold"
          fontSize="20px"
        >
          My app
        </Heading>
      </Link>
    </Flex>
  );
}
