import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./actions";

const initialState = {
  isLoading: true,
  error: false,
  data: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default covidSlice.reducer;
