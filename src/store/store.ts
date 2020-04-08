import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './reducers';

export const store = configureStore({
  reducer: appReducer,
});
