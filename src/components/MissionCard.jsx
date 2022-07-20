import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMember } from '../redux/Missions/Missions';

function MissionCard({
  des, name, id, isMember,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeMember(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{des}</td>
      <td>{isMember ? 'Active Member' : 'Not a member'}</td>
      <td><button type="button" onClick={handleClick}>{isMember ? 'Leave mission' : 'join mission'}</button></td>
    </tr>
  );
}

export default MissionCard;

MissionCard.propTypes = {
  des: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
};
