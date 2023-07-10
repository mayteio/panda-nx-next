import { PropsWithChildren } from 'react';

import { Flex } from '@nx-integrated-monorepo/core';
import {
  Topbar,
  Sidebar,
  SidebarItem,
} from '@nx-integrated-monorepo/navigation';
import { MdOutlineDashboard, MdFilter, MdSettings } from 'react-icons/md';
import { Icon } from '@nx-integrated-monorepo/data-display';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Flex flexGrow={1} flexDir="column">
      <Topbar />
      <Flex flexGrow={1}>
        <Flex position="relative" zIndex={9}>
          <Sidebar>
            <SidebarItem
              href="/dashboard"
              icon={<Icon as={MdOutlineDashboard} w="24px" h="24px" />}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              href="/projects"
              icon={<Icon as={MdFilter} w="24px" h="24px" />}
            >
              My projects
            </SidebarItem>
            <SidebarItem
              href="/settings"
              icon={<Icon as={MdSettings} w="24px" h="24px" />}
            >
              Organization settings
            </SidebarItem>
          </Sidebar>
        </Flex>
        <Flex flexDir="column" flexGrow={1}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
