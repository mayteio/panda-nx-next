'use client';

import { Flex, Heading, Text } from '@nx-integrated-monorepo/core';
import { Button } from '@nx-integrated-monorepo/forms';
import {
  Card,
  CardImage,
  CardContent,
  Icon,
  Flag,
} from '@nx-integrated-monorepo/data-display';
import { MdArrowRightAlt } from 'react-icons/md';
import { Divider } from '@nx-integrated-monorepo/styled-system';

export function ProjectCard() {
  return (
    <Card minH="206px">
      <CardImage />
      <CardContent>
        <Heading size="h6">Project A</Heading>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ md: 'center' }}
          mb={4}
        >
          <Text display="flex" alignItems="center">
            <Flag code="BR" mr={2} /> Brazil
          </Text>
          <Divider
            w="1px"
            color="light"
            orientation={{ base: 'horizontal', md: 'vertical' }}
            my={{ base: 2, md: undefined }}
            mx={{ base: undefined, md: 4 }}
          />
          <Text display="flex" alignItems="center">
            74,039 hectares
          </Text>
        </Flex>
        <Button
          visual="secondary"
          mt="auto"
          display={{ base: 'none', md: 'flex' }}
        >
          Complete project onboarding{' '}
          <Icon as={MdArrowRightAlt} w={6} h={6} ml={1} />
        </Button>
        <Button
          visual="secondary"
          mt="auto"
          display={{ base: 'flex', md: 'none' }}
        >
          Complete <Icon as={MdArrowRightAlt} w={6} h={6} ml={1} />
        </Button>
      </CardContent>
    </Card>
  );
}
