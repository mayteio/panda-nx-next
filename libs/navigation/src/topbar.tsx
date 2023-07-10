import { Flex } from '@nx-integrated-monorepo/core';
import { Logo } from '@nx-integrated-monorepo/data-display';
import Link from 'next/link';

export function Topbar() {
  return (
    <Flex py="16px" px="32px" borderBottom="1px solid token(colors.light)">
      <Link href="/">
        <Logo variant="mark" />
      </Link>
    </Flex>
  );
}
