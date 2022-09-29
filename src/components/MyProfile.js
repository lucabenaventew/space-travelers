import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);

  const rocketsReservation = rockets.filter((rocket) => rocket.reserved);
  console.log(rocketsReservation);

  return (
    <>
      <div className="my-profile-section">
        <div className="rockets-profile">
          <h2 className="profile-title">Rockets</h2>
          <ul className="profile-list">
            {rocketsReservation.length === 0
              ? <li className="no-rocket-reservations">No Reservations</li>
              : rocketsReservation.map((rocket) => (
                <li
                  key={rocket.id}
                  className="rocket-reserved"
                >
                  {rocket.rocket_name}
                </li>
              ))}
          </ul>
        </div>
        <div className="missions-profile">
          <h2 className="profile-title">Missions</h2>
          <ul className="profile-list">
            {activeMissions.length === 0 ? 'No Missions Booked' : activeMissions.map((mission) => (
              <li className="mission-reserved" key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
