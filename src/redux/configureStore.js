import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Missions from './Missions/Missions';
import Rockets from './Rockets/Rockets';

const Store = configureStore({
  reducer: {
    Missions, Rockets,
  },
  middleware: [thunk],
});

export default Store;
