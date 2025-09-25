import styled from 'styled-components';

interface StepperProps {
  isRtl: boolean;
}

interface StepProps {
  isRtl: boolean;
}

interface CircleProps {
  isRtl: boolean;
  isActive: boolean;
  color: string;
  lineColor: string;
}

interface LineProps {
  color: string;
}

export const Circle = styled.div<CircleProps>`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 1px;
  border: 1px solid ${({ color, isActive }) => (isActive ? color : 'transparent')};
  transition: all 0.3s ease;
  z-index: 1;

  &::after {
    flex: 1;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 50%;
    background: ${({ color }) => color};
  }

  &::before {
    display: ${({ isActive }) => (isActive ? 'none' : 'block')};
    box-sizing: border-box;
    position: absolute;
    width: calc(100% + 2px);
    height: 1px;
    content: '';
    top: 0;
    margin-top: 4px;
    z-index: -1;
    background: ${({ lineColor }) => lineColor};
    ${({ isRtl }) => (isRtl ? 'right: -1px' : 'left: -1px')}
  }
`;

export const Step = styled.div<StepProps>`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: ${({ isRtl }) => (isRtl ? 'row-reverse' : 'row')};

  &:last-child ${Circle}::before {
    width: 50%;
    margin-inline-end: auto;
  }
`;

export const Line = styled.div<LineProps>`
  display: inline-block;
  box-sizing: border-box;
  width: 30px;
  height: 1px;
  flex-shrink: 0;
  background: ${({ color }) => color};
  transition: all 0.3s ease;
`;

export const Stepper = styled.div<StepperProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ isRtl }) => (isRtl ? 'row-reverse' : 'row')};
  direction: ltr;

  ${Circle} {
    direction: ${({ isRtl }) => (isRtl ? 'rtl' : 'ltr')};
  }
`;
