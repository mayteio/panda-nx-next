import { Heading, Text } from '@nx-integrated-monorepo/core';
import { Badge, Card, CardContent } from '@nx-integrated-monorepo/data-display';
import { VStack } from '@nx-integrated-monorepo/styled-system';
import { ProjectCard } from './components/project-card';

export default function DashboardHome() {
  return (
    <VStack
      alignItems="flex-start"
      height="100%"
      p={{ base: 6, md: 8 }}
      bg="reverse-heavy"
    >
      <Heading size="h5" fontWeight="bold">
        Welcome to Supply inc!
      </Heading>
      <Text mb={8}>
        Here you will be able to track the progress of your projects and find
        new opportunities
      </Text>
      <Card>
        <CardContent>
          <Heading
            size="subtitle1"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            Pending tasks
            <Badge ml={1}>2</Badge>
          </Heading>
          <Text mb={8}>
            Our setup guide will walk you through how to get your projects setup
            with Pachama
          </Text>
          <ProjectCard />
        </CardContent>
      </Card>
    </VStack>
  );
}
