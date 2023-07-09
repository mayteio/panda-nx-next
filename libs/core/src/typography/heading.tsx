import { styled, css } from '@nx-integrated-monorepo/styled-system';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';
import { ElementType, PropsWithChildren, forwardRef } from 'react';

export type HeadingProps = JsxStyleProps &
  PropsWithChildren<{
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
  }>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ size = 'h1', ...props }, ref) {
    const El = styled(
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size)
        ? (size as ElementType)
        : 'p'
    );
    return <El ref={ref} className={css({ textStyle: size })} {...props} />;
  }
);
