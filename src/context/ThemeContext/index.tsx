import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import { CheckboxPalettes } from '../../components/Basics/Checkbox/types';
import { RadioButtonPalette } from '../../components/Basics/RadioButton/types';
import { TogglePalette } from '../../components/Basics/Toggle/types';
import { TypographyPalette } from '../../components/Basics/Typography/types';
import { ButtonPalettes } from '../../components/Buttons/Button/types';
import { IconButtonPalette } from '../../components/Buttons/IconButton/types';
import { StepperPalette } from '../../components/Navigation/Stepper/types';
import { Mode } from '../../types';
import { palette } from './palette';
import { standard } from './themes';

interface ThemeContextType {
  theme: {
    button: ButtonPalettes;
    checkbox: CheckboxPalettes;
    iconButton: IconButtonPalette;
    stepper: StepperPalette;
    toggle: TogglePalette;
    radioButton: RadioButtonPalette;
    typography: TypographyPalette;
  };
  isRtl: boolean;
  palette: { [key: string]: string };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
  isRtl?: boolean;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children, isRtl = false }) => {
  const theme = useMemo(() => {
    const mode = Mode.standard; // add logic to get mode from user

    switch (mode) {
      case Mode.standard:
      default:
        return standard();
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, isRtl, palette }}>{children}</ThemeContext.Provider>;
};

const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext can only be used when theme exists');
  }

  return context;
};

export { ThemeContextProvider as DSThemeContextProvider, useThemeContext as useDSThemeContext, palette as DSPalette };
