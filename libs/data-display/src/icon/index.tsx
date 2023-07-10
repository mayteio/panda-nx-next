import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';
import { ElementType, PropsWithChildren, forwardRef } from 'react';
import { styled } from '@nx-integrated-monorepo/styled-system';

export type IconProps = JsxStyleProps & PropsWithChildren<{ as: ElementType }>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { as, children, ...props },
  ref
) {
  if (as) {
    const Element = styled(as);
    return <Element ref={ref} {...props} />;
  }

  return (
    <styled.svg ref={ref} {...props}>
      {children}
    </styled.svg>
  );
});
