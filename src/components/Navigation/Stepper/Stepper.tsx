import React, { FC } from 'react';
import { useDSThemeContext } from '../../../context';
import * as S from './style';
import { StepperProps } from './types';

const Stepper: FC<StepperProps> = ({ steps = [], activeStep = 0, onStepClick = () => {} }) => {
  const {
    theme: { stepper },
    isRtl,
  } = useDSThemeContext();

  const handleStepClick = (step: number) => {
    onStepClick(step);
  };

  return (
    <S.Stepper isRtl={isRtl}>
      {steps.map((_, index) => {
        const isActive = activeStep >= index;

        return (
          <S.Step key={index} isRtl={isRtl}>
            {index !== 0 && <S.Line color={isActive ? stepper.active : stepper.inactiveLine} />}
            <S.Circle
              isRtl={isRtl}
              isActive={isActive}
              color={isActive ? stepper.active : stepper.inactiveStep}
              lineColor={isActive ? stepper.active : stepper.inactiveLine}
              onClick={() => {
                handleStepClick(index);
              }}
            />
          </S.Step>
        );
      })}
    </S.Stepper>
  );
};

export default Stepper;
