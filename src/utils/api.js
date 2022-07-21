import axios from 'axios';

export const getMissions = async () => {
  const missionsData = await axios({
    method: 'GET',
    url: 'https://api.spacexdata.com/v3/missions',
  }).then((response) => response.data)
    .catch((err) => err.message);
  return missionsData;
};

export const getRockets = () => {
  const rocketsData = axios({
    method: 'GET',
    url: 'https://api.spacexdata.com/v3/rockets',
  }).then((response) => response.data)
    .catch((err) => err.message);
  return rocketsData;
};
