export interface ThemeState {
  theme: Mode;
  toggleTheme: () => void;
}

export interface Mode {
  foreground: string;
  background: String;
}

export interface Theme {
  light: Mode;
  dark: Mode;
}

export const lightAndDarkTheme: Theme = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
