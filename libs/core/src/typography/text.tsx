import { styled, css, cx, cva } from '@nx-integrated-monorepo/styled-system';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';
import { ElementType, PropsWithChildren, forwardRef } from 'react';

export type TextProps = JsxStyleProps &
  PropsWithChildren<{
    size?: 'body1' | 'body2' | 'overline' | 'caption';
    as?: ElementType;
    className?: string;
  }>;

export const text = cva({
  variants: {
    size: {
      body1: {
        fontFamily: 'body',
        fontSize: '16px',
      },
      body2: {
        fontFamily: 'body',
        fontSize: '14px',
      },
      overline: {
        fontFamily: 'body',
        fontSize: '18px',
        textTransform: 'uppercase',
      },
      caption: {
        fontFamily: 'body',
        fontSize: '12px',
      },
    },
  },
});

export const Text = forwardRef<HTMLHeadingElement, TextProps>(function Text(
  { size = 'body1', as = 'p', className, ...props },
  ref
) {
  const El = styled(as);
  return <El ref={ref} className={cx(text({ size }), className)} {...props} />;
});
