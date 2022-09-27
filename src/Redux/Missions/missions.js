import { createSlice } from '@reduxjs/toolkit';
import rockets from '../Rockets/rockets';

const initialState = {
    missions: [],
};

export const missionsSlice = createSlice({
    name: 'missions',
    initialState,
});
  
//   export const { setBook, unsetBook } = booksSlice.actions;
  
  export default missionsSlice.reducer;
  