'use client';

import { ReactNode, forwardRef } from 'react';

import {
  Portal,
  Select as ArkSelect,
  SelectProps as ArkSelectProps,
  SelectLabel,
  SelectContent,
  SelectOption,
  SelectPositioner,
  SelectTrigger,
} from '@ark-ui/react';
import {
  RecipeVariantProps,
  select,
  styled,
} from '@nx-integrated-monorepo/styled-system';
import { FiChevronDown } from 'react-icons/fi';
import { JsxStyleProps } from 'libs/styled-system/src/__generated__/types';

export type SelectItem = {
  label: string;
  value: string;
};

export type SelectProps = ArkSelectProps &
  RecipeVariantProps<typeof select> &
  JsxStyleProps & { label?: string; options: SelectItem[] };

const StyledSelect = styled(ArkSelect);

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  function Select({ label, size, options, ...props }, ref) {
    return (
      <StyledSelect positioning={{ gutter: 4 }} {...props}>
        {({ selectedOption, isOpen }) => (
          <>
            {label && (
              <SelectLabel className={select({ size })}>{label}</SelectLabel>
            )}
            <SelectTrigger ref={ref} asChild>
              <button className={select({ size })}>
                <span>{selectedOption?.label ?? 'Select option'}</span>
                <SelectIcon isOpen={isOpen} />
              </button>
            </SelectTrigger>
            <Portal>
              <SelectPositioner className={select({ size })}>
                <SelectContent>
                  {options.map((o) => (
                    <SelectOption {...o} key={o.value} />
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </>
        )}
      </StyledSelect>
    );
  }
);

function SelectIcon(props: { isOpen: boolean }) {
  return (
    <FiChevronDown
      style={{
        transform: props.isOpen ? 'rotate(-180deg)' : undefined,
        transition: 'transform 0.2s',
        transformOrigin: 'center',
        position: 'relative',
        top: '2px',
        marginLeft: '4px',
      }}
    />
  );
}
