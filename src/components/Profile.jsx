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
        <h3>My missions</h3>
        <table>
          {
          myMission.map((mission) => (
            <tr key={mission.mission_id}>{mission.mission_name}</tr>
          ))
        }
        </table>
      </div>
      <div className="rockets">
        <h3>My Rockets</h3>
        <table>
          {
          myRockets.map((rocket) => (<tr key={rocket.rocket_id}>{rocket.rocket_name}</tr>))
        }
        </table>
      </div>

    </div>
  );
}

export default Profile;
