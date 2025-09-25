import React, { ChangeEvent, FC } from 'react';
import { useDSThemeContext } from '../../../context';
import * as S from './style';
import { ToggleProps } from './types';

const Toggle: FC<ToggleProps> = ({
  id,
  name,
  value,
  selectedLabel,
  unselectedLabel,
  isDisabled = false,
  isSelected = false,
  onChange = () => {},
}) => {
  const {
    theme: { toggle },
  } = useDSThemeContext();

  const colors = {
    default: { toggle: toggle.default, circle: toggle.circle, text: toggle.text },
    selected: { toggle: toggle.selected, circle: toggle.circle, text: toggle.text },
    disabled: { toggle: toggle.disabled.default, circle: toggle.disabled.circle, text: toggle.disabled.text },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };

  return (
    <S.Toggle role="toggle" colors={colors}>
      <S.Input id={id} name={name} value={value} type="checkbox" checked={isSelected} disabled={isDisabled} onChange={handleChange} />
      {unselectedLabel && <S.Label>{unselectedLabel}</S.Label>}
      <S.ToggleBase>
        <S.Circle />
      </S.ToggleBase>
      {selectedLabel && <S.Label>{selectedLabel}</S.Label>}
    </S.Toggle>
  );
};

export default Toggle;
