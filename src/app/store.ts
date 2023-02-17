import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import registrationReducer from './slices/registrationSlice';


export const store = configureStore({
  reducer: {
    loginReducer,
    registrationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;