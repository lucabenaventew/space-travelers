import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
});

//   export const { setBook, unsetBook } = booksSlice.actions;

export default missionsSlice.reducer;
