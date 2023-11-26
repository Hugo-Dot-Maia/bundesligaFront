import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seasonResult: [],
};

export const seasonResultSlice = createSlice({
  name: 'seasonResult',
  initialState,
  reducers: {
    updateSeasonResult: (state, action) => {
      state.seasonResult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSeasonResult } = seasonResultSlice.actions;

export default seasonResultSlice.reducer;
