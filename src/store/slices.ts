import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {lightAndDarkTheme} from '../themes/themes';
import {ThemeState, Mode} from 'themes/themes';

const initialState: ThemeState = {
  theme: lightAndDarkTheme.dark,
  toggleTheme: () => {},
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    createTheming: (state, action: PayloadAction<Mode>) => {
      state.theme = action.payload;
    },
  },
});

export const {createTheming} = themeSlice.actions;

export default themeSlice.reducer;
