import * as MS from '@/styles/components/MonthSelectDropDown.style';
import { useState } from 'react';

interface MonthSelectDropDownProps {
  month: number | null;
  onMonthSelect: (month: number) => void;
  disabled?: boolean;
}

// 1월 ~ 12월
const Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const MonthSelectDropDown = ({
  month,
  onMonthSelect,
  disabled,
}: MonthSelectDropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <MS.DropdownContainer disabled={disabled}>
      <MS.Dropdown onClick={() => !disabled && setOpen((p) => !p)}>
        <MS.DropdownLabel>{month ?? '월'}</MS.DropdownLabel>
        <MS.ChevronDown />
      </MS.Dropdown>
      {open && (
        <MS.Options>
          {Months.map((month) => (
            <MS.Option
              key={month}
              tabIndex={0}
              onClick={() => {
                onMonthSelect(month);
                setOpen(false);
              }}
            >
              {month}
            </MS.Option>
          ))}
        </MS.Options>
      )}
    </MS.DropdownContainer>
  );
};
