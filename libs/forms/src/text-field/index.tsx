'use client';

import {
  Editable,
  EditableArea,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from '@ark-ui/react';
import { textField } from '@nx-integrated-monorepo/styled-system';

export type TextFieldProps = {
  label?: string;
  placeholder?: string;
};

export function TextField({ label, placeholder }: TextFieldProps) {
  return (
    <Editable className={textField()} placeholder={placeholder}>
      {label && <EditableLabel>{label}</EditableLabel>}
      <EditableArea>
        <EditablePreview />
        <EditableInput />
      </EditableArea>
    </Editable>
  );
}
