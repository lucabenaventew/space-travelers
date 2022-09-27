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
  return missionsData;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
        }
    );
    builder.addCase(fetchMissions.rejected, (state) => {
        state.status = 'failed';
        }
    );
  },
});

//   export const { setBook, unsetBook } = booksSlice.actions;

export default missionsSlice.reducer;
