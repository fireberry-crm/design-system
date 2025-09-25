export interface StepperProps {
  steps: any[];
  activeStep: number;
  onStepClick: (step: number) => void;
}

export type StepperPalette = {
  active: string;
  inactiveLine: string;
  inactiveStep: string;
};
