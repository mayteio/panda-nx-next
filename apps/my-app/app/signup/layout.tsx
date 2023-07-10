import { PropsWithChildren } from 'react';

import {
  Box,
  SplitScreenAside,
  SplitScreenContainer,
  SplitScreenContent,
  SplitScreenLayout,
  SplitScreenMain,
} from '@nx-integrated-monorepo/core';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <SplitScreenContainer>
      <SplitScreenLayout>
        <SplitScreenMain>
          <SplitScreenContent>{children}</SplitScreenContent>
        </SplitScreenMain>
        <SplitScreenAside
          backgroundColor="#D9E8E5"
          backgroundImage="url(https://storage.googleapis.com/marketplace-cms-production/preview_image_9903a3f342/preview_image_9903a3f342.png?updated_at=2023-07-10T06:07:30.409Z)"
          backgroundPosition="bottom right"
          backgroundRepeat="no-repeat"
          backgroundSize="75%"
          position="relative"
        />
      </SplitScreenLayout>
    </SplitScreenContainer>
  );
}
