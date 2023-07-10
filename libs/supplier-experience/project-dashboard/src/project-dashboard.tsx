import { Heading } from '@nx-integrated-monorepo/core';
import { Text } from '@nx-integrated-monorepo/core';
import { Card, CardContent, Badge } from '@nx-integrated-monorepo/data-display';
import { ProjectCard } from './components/project-card';

export function ProjectDashboard() {
  return (
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
  );
}
