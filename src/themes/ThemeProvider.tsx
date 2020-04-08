import * as React from 'react';
import {lightAndDarkTheme, ThemeState} from './themes';
import {Mode} from './themes';
import {ThemeContext} from 'AppContext';

const defaultTheme: Mode = lightAndDarkTheme.light;

export default class ThemeProvider extends React.Component {
  //Change color to the button
  toggleTheme = () => {
    const currentTheme: Mode = this.state.theme || defaultTheme;
    const newTheme: Mode =
      currentTheme === lightAndDarkTheme.dark
        ? lightAndDarkTheme.light
        : lightAndDarkTheme.dark;

    console.log(
      'currentTheme: ' +
        currentTheme.foreground +
        ' newTheme: ' +
        newTheme.foreground,
    );

    this.setState({theme: newTheme});
  };

  // inizialise themeState
  // .light or .dark
  // themeState also contains the updater function so it will
  // be passed down into the context provider
  state: ThemeState = {
    theme: defaultTheme,
    toggleTheme: this.toggleTheme,
  };

  // Use a Provider to pass the current theme to the tree below. Any
  // component can read it, no matter how deep it is. In this example, we're
  // passing "dark" as the current value.
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
