import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    return response.json();
  },
);

const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketsReducer: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.payload.rocket.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { rocketsReducer } = rocketsSlice.actions;

export default rocketsSlice.reducer;
