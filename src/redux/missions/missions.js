/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import { getMissions } from '../../utils/api';

const GET = 'reactsproject/Mission/GET_ALL_MISSIONS';
const CHANGEMEMBER = 'reactsproject/Mission/CHANGE_MEMBER_STATUS';

export const getAllMissions = async (dispatch) => {
  const data = await getMissions();
  const missions = Object.keys(data).map((key) => {
    const mission = data[key];
    return mission;
  });
  dispatch({ type: GET, payload: missions });
};

export const changeMember = (id) => async (dispatch) => {
  dispatch({ type: CHANGEMEMBER, payload: id });
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload.map((mision) => ({ ...mision, isMember: false }));
    case CHANGEMEMBER:
      return state.map((item) => {
        if (item.mission_id === action.payload) {
          item.isMember = !item.isMember;
          return item;
        }
        return item;
      });
    default:
      return state;
  }
};

export default missionReducer;
