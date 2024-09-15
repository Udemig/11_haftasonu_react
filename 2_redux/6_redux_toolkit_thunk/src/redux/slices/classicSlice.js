import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setUsers: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },

    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default classicSlice.reducer;

export const { setLoading, setError, setUsers } = classicSlice.actions;
