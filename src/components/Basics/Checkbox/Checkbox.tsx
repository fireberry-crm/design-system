import React, { ChangeEvent, FC } from 'react';
import { Color } from '../../../types';
import Icon from '../Icon';
import { IconName, IconSize } from '../Icon/types';
import * as S from './style';
import { CheckboxProps, Variant } from './types';
import { useCheckboxStyles } from './useCheckboxStyles';

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  label,
  value,
  errorLabel,
  error = false,
  isChecked = false,
  isDisabled = false,
  color = Color.success,
  isIndeterminate = false,
  variant = Variant.square,
  onChange = () => {},
}) => {
  const iconName = !error && (isIndeterminate ? IconName.Minus : isChecked ? IconName.Check : null);

  const { checkboxStyles, labelColor, errorLabelColor } = useCheckboxStyles(color, variant, isChecked || isIndeterminate, error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange(checked);
  };

  return checkboxStyles ? (
    <S.Checkbox>
      <S.CheckboxWrapper role="checkboxWrapper" checkboxStyles={checkboxStyles} error={error}>
        <S.Input
          id={id}
          name={name}
          value={value}
          type="checkbox"
          disabled={isDisabled}
          checked={isChecked || isIndeterminate}
          onChange={handleChange}
        />
        <S.CheckboxBase variant={variant}>{iconName && <Icon icon={iconName} size={IconSize['10px']} />}</S.CheckboxBase>
        {label && <S.Label color={labelColor}>{label}</S.Label>}
      </S.CheckboxWrapper>
      {error && errorLabel && <S.Label color={errorLabelColor}>{errorLabel}</S.Label>}
    </S.Checkbox>
  ) : (
    <div>Not implemented</div>
  );
};

export default Checkbox;
