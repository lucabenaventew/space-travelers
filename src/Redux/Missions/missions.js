/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  status: 'idle',
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(URL);
  const missionsData = await response.json();
  const addReserved = missionsData.map((mission) => {
    mission.reserved = false;
    return mission;
  });
  return addReserved;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const mission = state.missions.find((m) => m.mission_id === action.payload);
      mission.reserved = !mission.reserved;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMissions.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { reserveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
