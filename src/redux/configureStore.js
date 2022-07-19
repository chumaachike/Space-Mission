import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Missions from './Missions/missions';
import Rockets from './Rockets/rockets';

const store = configureStore({
  reducer: {
    Missions, Rockets,
  },
  middleware: [thunk],
});

export default store;
