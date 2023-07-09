'use client';

import {
  Editable,
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
  placeholder?: string;
};

const StyledEditable = styled(Editable);

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, placeholder, ...props }, ref) {
    return (
      <StyledEditable
        className={textField()}
        placeholder={placeholder}
        {...props}
      >
        {label && <EditableLabel>{label}</EditableLabel>}
        <EditableArea>
          <EditablePreview />
          <EditableInput ref={ref} />
        </EditableArea>
      </StyledEditable>
    );
  }
);
