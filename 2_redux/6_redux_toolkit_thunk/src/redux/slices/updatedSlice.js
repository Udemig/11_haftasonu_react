import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  reducers: {},
  //* asenkron aksiyonunun "pending" "rejected" "fulfilled" durumlarında state'i güncellemek istiyorsak extraReducers kullanılmalı
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
