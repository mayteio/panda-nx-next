import { Heading, Text } from '@nx-integrated-monorepo/core';
import { VStack } from '@nx-integrated-monorepo/styled-system';
import { ProjectDashboard } from '@nx-integrated-monorepo/supplier-experience/project-dashboard';

export default function DashboardHome() {
  return (
    <VStack
      alignItems="flex-start"
      height="100%"
      p={{ base: 6, md: 8 }}
      bg="#F5F6F8"
    >
      <Heading size="h5" fontWeight="bold">
        Welcome to Supply inc!
      </Heading>
      <Text mb={8}>
        Here you will be able to track the progress of your projects and find
        new opportunities
      </Text>
      <ProjectDashboard />
    </VStack>
  );
}
