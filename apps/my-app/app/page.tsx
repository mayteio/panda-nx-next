import { css } from '@nx-integrated-monorepo/styled-system';
import { Button } from '@nx-integrated-monorepo/forms';

export default function Index() {
  return (
    <>
      <div
        className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'red' })}
      >
        Hello 🐼!
      </div>
      <Button mt="24px">Click me!</Button>
    </>
  );
}
