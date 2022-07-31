import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRockets } from '../redux/Rockets/Rockets';
import RocketCard from './RocketCard';

function Rocket() {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (allRockets === undefined || allRockets.length === 0) {
      dispatch(getAllRockets);
    }
  }, []);
  const renderedItem = allRockets.map(
    (rocket) => (
      <RocketCard
        key={rocket.rocket_id}
        img={rocket.flickr_images[0]}
        name={rocket.rocket_name}
        des={rocket.description}
        reserved={rocket.reserved}
        id={rocket.rocket_id}
      />
    ),

  );
  return <div className="mini-container">{renderedItem}</div>;
}

export default Rocket;
