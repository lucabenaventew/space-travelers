import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getRockets = createAsyncThunk(
    'rockets/getRockets',
    async () => {
      const response = await fetch('https://api.spacexdata.com/v3/rockets');
      return response.json();
    },
  );
  
  const initialState = [];
  
