import { Icon, Logo } from '@nx-integrated-monorepo/data-display';
import { Button } from '@nx-integrated-monorepo/forms';
import { Flex } from '@nx-integrated-monorepo/styled-system';
import { CreateAccountForm } from '@nx-integrated-monorepo/supplier-experience/user-authentication';
import Link from 'next/link';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { LanguageSwitcher } from './components/language-switcher';

export default function DashboardHome() {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={24}>
        <Link href="/">
          <Button
            visual="tertiary"
            color="text.medium"
            textDecoration="none"
            px={0}
          >
            <Icon as={MdOutlineArrowBackIosNew} color="medium" />
            Back
          </Button>
        </Link>
        <LanguageSwitcher />
      </Flex>
      <Logo />
      <CreateAccountForm />
    </>
  );
}
