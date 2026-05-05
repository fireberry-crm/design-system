/** Props for the Stepper component. Renders a horizontal sequence of step indicators. */
export interface StepperProps {
  /** Step entries. The number of items determines the number of steps. */
  steps: any[];
  /** Zero-based index of the currently active step. */
  activeStep: number;
  /** Called when a step is clicked. */
  onStepClick: (step: number) => void;
}

export type StepperPalette = {
  active: string;
  inactiveLine: string;
  inactiveStep: string;
};
