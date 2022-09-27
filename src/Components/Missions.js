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
    <div>Missions</div>
  );
}

export default Missions;
