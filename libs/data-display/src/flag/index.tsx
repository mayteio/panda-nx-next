import { FlagIcon, FlagIconProps } from 'react-flag-kit';

import { Icon } from '../icon';
import { forwardRef } from 'react';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';

export type FlagProps = FlagIconProps & JsxStyleProps;

export const Flag = forwardRef<SVGSVGElement, FlagProps>(function Flag(
  props,
  ref
) {
  return <Icon as={FlagIcon} ref={ref} {...props} />;
});
