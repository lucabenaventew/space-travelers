import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
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
});
  
//   export const { setBook, unsetBook } = booksSlice.actions;
  
  export default missionsSlice.reducer;
  