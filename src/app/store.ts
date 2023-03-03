import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import registrationReducer from './slices/registrationSlice';
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
  reducer: {
    authReducer,
    loginReducer,
    registrationReducer,
    postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;