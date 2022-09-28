import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from './Rockets/rockets';
import missionsReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
