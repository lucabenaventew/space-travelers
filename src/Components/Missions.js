import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missions';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  return (
    missions.map((mission) => (
        <table className="missions-table">
        <tr>
          <th className="head-table">Mission</th>
          <th className="head-table">Description</th>
          <th className="head-table">Status</th>
          <th className="head-table"><button type="submit">Join</button></th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td><button type="submit">Join</button></td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td><button type="submit">Join</button></td>
        </tr>
      </table>
    );

  );
}

export default Missions;
