import { configureStore } from '@reduxjs/toolkit';
import petSlice from './features/petSlice';

export const store = configureStore({
  reducer: {
    pet: petSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
