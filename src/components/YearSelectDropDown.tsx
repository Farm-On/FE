import * as YS from '@/styles/components/YearSelectDropDown.style';
import { useState } from 'react';

interface YearSelectDropDownProps {
  year: number | null;
  onYearSelect: (year: number) => void;
  disabled?: boolean;
}

// 2025 ~ 1900년까지
const years = ((y = new Date().getFullYear()) =>
  Array.from({ length: y - 1899 }, (_, i) => y - i))();

export const YearSelectDropDown = ({ year, onYearSelect, disabled }: YearSelectDropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <YS.DropdownContainer disabled={disabled}>
      <YS.Dropdown onClick={() => !disabled && setOpen((p) => !p)}>
        <YS.DropdownLabel>{year ?? '년도'}</YS.DropdownLabel>
        <YS.ChevronDown />
      </YS.Dropdown>
      {open && (
        <YS.Options>
          {years.map((year) => (
            <YS.Option
              key={year}
              tabIndex={0}
              onClick={() => {
                onYearSelect(year);
                setOpen(false);
              }}
            >
              {year}
            </YS.Option>
          ))}
        </YS.Options>
      )}
    </YS.DropdownContainer>
  );
};
