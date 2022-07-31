import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Missions from './missions/missions';
import Rockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    Missions, Rockets,
  },
  middleware: [thunk],
});

export default store;
