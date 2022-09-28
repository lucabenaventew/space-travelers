import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission } from '../Redux/Missions/missions';
import './Missions.css';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const { missions } = useSelector((state) => state.missions);
  console.log(missions);
  const checkStatus = (id) => {
    const mission = missions.find((m) => m.mission_id === id);
    dispatch(reserveMission(id));
    console.log(mission.reserved);
    return mission.reserved;
  };
  const memberStatus = (status) => {
    if (status) {
      return 'Active Member';
    }
    return 'Not a Member';
  };

  const memberLeave = (status) => {
    if (status) {
      return 'Leave Mission';
    }
    return 'Join Mission';
  };
  const domTemplate = () => missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td className="membernactive"><div className="memberstyle">{memberStatus(mission.reserved)}</div></td>
      <td><button onClick={() => { checkStatus(mission.mission_id); }} type="submit">{memberLeave(mission.reserved)}</button></td>
    </tr>
  ));

  return (
    <div className="missions-container">
      <table className="missions-table">
        <tr>
          <th className="head-table">Mission</th>
          <th className="head-table">Description</th>
          <th className="head-table">Status</th>
          <th> Join </th>
        </tr>
        {domTemplate()}
      </table>
    </div>
  );
}

export default Missions;
