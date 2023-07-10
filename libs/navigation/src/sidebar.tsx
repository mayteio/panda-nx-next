'use client';

import { PropsWithChildren, ReactNode } from 'react';

import { Box, Flex, Text } from '@nx-integrated-monorepo/core';
import { Avatar } from '@nx-integrated-monorepo/data-display';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = PropsWithChildren<{
  href: string;
  icon?: ReactNode;
}>;

export function SidebarItem({ href, icon, children }: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href}>
      <Flex
        h="48px"
        alignItems="center"
        bg={active ? 'border.light' : undefined}
        _hover={{ bg: !active ? 'border.reverse-heavy' : undefined }}
        transition="all 150ms linear"
        borderRadius="md"
        mb={2}
        pl={3}
      >
        <Box w={6} h={6} flexShrink={0} mr={4}>
          {icon}
        </Box>
        <Text
          whiteSpace="nowrap"
          fontWeight="bold"
          transition="opacity 150ms linear"
          opacity={0}
          className="sidebar-item__text"
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
}

export function Sidebar({ children }: PropsWithChildren) {
  return (
    <Box w="80px" display={{ base: 'none', md: 'block' }}>
      <Box
        w="80px"
        h="100%"
        bg="white"
        overflow="hidden"
        borderRight="1px solid token(colors.border.light)"
        transition="width 250ms token(easings.out)"
        _hover={{ width: '300px', '& .sidebar-item__text': { opacity: 1 } }}
      >
        <Flex py={8} px={4} borderBottom="1px solid token(colors.border.light)">
          <Avatar mr={4} />
          <Flex
            flexDir="column"
            w="330px"
            whiteSpace="nowrap"
            className="sidebar-item__text"
            opacity={0}
            transition="opacity 150ms linear"
          >
            <Text fontWeight="bold">Supply Inc.</Text>
            <Text size="body2" color="text.medium">
              Project developer account
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" py={6} px={4}>
          {children}
        </Flex>
      </Box>
    </Box>
  );
}
