import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

const initialState = {
  data: [],
  error: "",
  loading: false,
};
const fetchUserThunk = createAsyncThunk(
  "users/fetchAllUsers",
  api.getAllUsersSuccecced
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      (state.data = []), (state.loading = true), (state.error = "");
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      (state.data = action.payload),
        (state.loading = false),
        (state.error = "");
    });
    builder.addCase(fetchUserThunk.rejected, (state, action) => {
      (state.data = []),
        (state.loading = false),
        (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;

export { fetchUserThunk };
