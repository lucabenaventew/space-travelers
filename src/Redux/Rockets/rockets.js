import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rockets: [],
};

export const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
});

export default rocketsSlice.reducer;
