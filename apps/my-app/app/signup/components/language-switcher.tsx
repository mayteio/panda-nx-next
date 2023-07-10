'use client';

import { Select } from '@nx-integrated-monorepo/forms';
import { Flex } from '@nx-integrated-monorepo/styled-system';

const options = [
  { label: 'English', value: 'en' },
  { label: 'Portugese', value: 'pt' },
  { label: 'Spanish', value: 'es' },
];

export function LanguageSwitcher() {
  return (
    <Flex alignItems="center" whiteSpace="nowrap">
      <Select size="sm" label="Select language" options={options} />
    </Flex>
  );
}
