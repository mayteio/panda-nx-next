// @todo: remove this when path imports work
'use client';

import { Avatar as ArkAvatar, AvatarFallback } from '@ark-ui/react';
import { avatar, styled } from '@nx-integrated-monorepo/styled-system';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';
import { forwardRef } from 'react';

export type AvatarProps = JsxStyleProps;

const StyledAvatar = styled(ArkAvatar);

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  props,
  ref
) {
  return (
    <StyledAvatar ref={ref} flexShrink={0} className={avatar()} {...props}>
      <AvatarFallback>Su</AvatarFallback>
    </StyledAvatar>
  );
});
