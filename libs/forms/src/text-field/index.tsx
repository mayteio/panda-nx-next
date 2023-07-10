'use client';

import {
  Editable,
  EditableProps,
  EditableArea,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from '@ark-ui/react';
import { styled, textField } from '@nx-integrated-monorepo/styled-system';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';
import { forwardRef } from 'react';

export type TextFieldProps = JsxStyleProps & {
  label?: string;
} & Omit<EditableProps, 'children'>;

const StyledEditable = styled(Editable);

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, ...props }, ref) {
    return (
      <StyledEditable className={textField()} {...props}>
        {label && <EditableLabel>{label}</EditableLabel>}
        <EditableArea>
          <EditablePreview />
          <EditableInput ref={ref} />
        </EditableArea>
      </StyledEditable>
    );
  }
);
