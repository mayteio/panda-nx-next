import { ElementType, PropsWithChildren, forwardRef } from 'react';

import { styled, cva } from '@nx-integrated-monorepo/styled-system';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';

export type HeadingProps = JsxStyleProps &
  PropsWithChildren<{
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
  }>;

// would be nice if we could replace this with textStyles
const heading = cva({
  variants: {
    size: {
      h1: {
        fontFamily: 'branded',
        fontSize: '72px',
      },
      h2: {
        fontFamily: 'branded',
        fontSize: '64px',
      },
      h3: {
        fontFamily: 'branded',
        fontSize: '52px',
      },
      h4: {
        fontFamily: 'branded',
        fontSize: '44px',
      },
      h5: {
        fontFamily: 'branded',
        fontSize: '36px',
      },
      h6: {
        fontFamily: 'branded',
        fontSize: '32px',
      },
      subtitle1: {
        fontFamily: 'body',
        fontSize: '24px',
      },
      subtitle2: {
        fontFamily: 'body',
        fontSize: '20px',
      },
    },
  },
});

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ size, ...props }, ref) {
    const Element = styled(
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size ?? 'h1')
        ? (size as ElementType)
        : 'p'
    );
    return <Element ref={ref} className={heading({ size })} {...props} />;
  }
);
