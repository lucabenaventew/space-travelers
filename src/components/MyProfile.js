import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReservation = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="my-profile-section">
        <div className="rockets-profile">
          <h2>Rockets</h2>
          <ul>
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
          <h2>Missions</h2>
          <ul>
            <p>Missions content</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
