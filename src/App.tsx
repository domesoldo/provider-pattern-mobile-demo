import React from 'react';
import ThemeProvider from './themes/ThemeProvider';
import Box from 'components/Box';

const App = () => {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
};

export default App;
