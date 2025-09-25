import React, { ChangeEvent, FC } from 'react';
import { useDSThemeContext } from '../../../context';
import * as S from './style';
import { RadioButtonProps } from './types';

const RadioButton: FC<RadioButtonProps> = ({ id, name, value, label, isDisabled = false, isSelected = false, onChange = () => {} }) => {
  const {
    theme: { radioButton },
  } = useDSThemeContext();

  const colors = {
    default: { background: radioButton.background, innerBorder: radioButton.background, outerBorder: radioButton.border },
    selected: { background: radioButton.selected, innerBorder: radioButton.background, outerBorder: radioButton.selected },
    disabled: {
      background: radioButton.disabled.background,
      innerBorder: radioButton.disabled.background,
      outerBorder: radioButton.disabled.border,
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };

  return (
    <S.RadioButton role="radioButton" colors={colors}>
      <S.Input id={id} name={name} type="radio" value={value} checked={isSelected} disabled={isDisabled} onChange={handleChange} />
      <S.RadioButtonBase />
      {label && <S.Label color={radioButton.text}>{label}</S.Label>}
    </S.RadioButton>
  );
};

export default RadioButton;
