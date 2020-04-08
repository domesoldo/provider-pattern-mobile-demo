import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from './slices';

export const appReducer = combineReducers({themeState: themeReducer});
