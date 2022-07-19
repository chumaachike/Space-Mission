import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const allRockets = useSelector((state) => state.Rockets);
  const allMissions = useSelector((state) => state.Missions);
  const myRockets = allRockets.filter((rocket) => rocket.reserved === true);
  const myMission = allMissions.filter((mission) => mission.isMember === true);
  return (
    <div className="profile-container">
      <div className="missions">
        <table>
          <thead>
            <tr><th>My missions</th></tr>
          </thead>
          <tbody>
            {
          myMission.map((mission) => (
            <tr key={mission.mission_id}><td>{mission.mission_name}</td></tr>
          ))
        }
          </tbody>
        </table>
      </div>
      <div className="rockets">
        <table>
          <thead>
            <tr><th>My Rockets</th></tr>
          </thead>
          <tbody>
            {
          myRockets.map((rocket) => (
            <tr key={rocket.rocket_id}><td>{rocket.rocket_name}</td></tr>
          ))
        }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Profile;
