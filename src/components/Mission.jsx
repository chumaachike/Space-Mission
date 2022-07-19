/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions } from '../redux/Missions/missions';
import MissionCard from './MissionCard';

function Mission() {
  const allMissions = useSelector((state) => state.Missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allMissions === undefined || allMissions.length === 0) {
      dispatch(getAllMissions);
    }
  }, []);
  const renderedItems = allMissions.map(
    (mission) => (
      <MissionCard
        key={mission.mission_id}
        des={mission.description}
        name={mission.mission_name}
        id={mission.mission_id}
        isMember={mission.isMember}
      />
    ),
  );
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th />
      </tr>
      {renderedItems}
    </table>
  );
}

export default Mission;
