import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeReservation } from '../redux/rockets/rockets';

function RocketCard({
  name, img, des, reserved, id,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeReservation(id));
  };
  return (
    <div className="rocket-card">
      <div className="img-contain">
        <img src={img} alt="" />
      </div>

      <div className="rocket-content">
        <h3>{name}</h3>
        <p>{des}</p>
        <button type="button" onClick={handleClick}>{reserved ? 'Cancel Reservation' : 'Reserve rocket'}</button>
      </div>

    </div>
  );
}

export default RocketCard;

RocketCard.propTypes = {
  des: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
