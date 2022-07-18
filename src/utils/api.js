import axios from 'axios';

const hhh = 10;
export const getMissions = () => {
  axios({
    method: 'GET',
    url: 'https://api.spacexdata.com/v3/missions',
  }).then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export default hhh;
