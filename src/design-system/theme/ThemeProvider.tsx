import type { FC, ReactNode } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import theme from "design-system/theme/theme.json";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);
