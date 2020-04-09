import React, {Context} from 'react';
import {lightAndDarkTheme} from './themes/themes';
import {ThemeState} from './themes/themes';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
// export const ThemeContext = React.createContext('light')
export const ThemeContext: Context<ThemeState> = React.createContext({
  theme: lightAndDarkTheme.dark,
  toggleTheme: () => {},
});
