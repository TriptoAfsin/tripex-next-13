import { combineReducers } from '@reduxjs/toolkit';
import globalUiSlice from './slices/globalUiSlice';
const rootReducer = combineReducers({
  globalUiSlice: globalUiSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
