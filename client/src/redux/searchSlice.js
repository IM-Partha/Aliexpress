// src/store/searchSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const selectSearchQuery = (state) => state.search.query;
export default searchSlice.reducer;
