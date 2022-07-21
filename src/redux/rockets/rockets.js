/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import { getRockets } from '../../utils/api';

const GET = 'reactproject/Rocket/GET_ALL_ROCKETS';
const CHANGERESERVE = 'reactproject/Rocket/CHANGE_RESERVED';

export const getAllRockets = async (dispatch) => {
  const data = await getRockets();
  const rockets = Object.keys(data).map((key) => {
    const rocket = data[key];
    return rocket;
  });
  dispatch({ type: GET, payload: rockets });
};

export const changeReservation = (id) => async (dispatch) => {
  dispatch({ type: CHANGERESERVE, payload: id });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload.map((mision) => ({ ...mision, reserved: false }));
    case CHANGERESERVE:
      return state.map((item) => {
        if (item.rocket_id !== action.payload) {
          return item;
        }
        return { ...item, reserved: !item.reserved };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
