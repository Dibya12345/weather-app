import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = {
  data: [],
  forecast: [],
  error: null,
  asyncStatus: "INIT",
};

export const getWeatherDetails = createAsyncThunk(
  "weather/getWeatherDetails",

  async (params) => {
    try {
      const data = await api.getWeatherDetails(params);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getForeCastDetails = createAsyncThunk(
  "weather/getForeCastDetails",
  async (params) => {
    try {
      const data = await api.getForeCastDetails(params);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.pending, (state, action) => {
      state.asyncStatus = "PENDING";
    });
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.asyncStatus = "SUCCESS";
    });
    builder.addCase(getWeatherDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.asyncStatus = "FAILED";
    });
    builder.addCase(getForeCastDetails.pending, (state, action) => {
      state.asyncStatus = "PENDING";
    });
    builder.addCase(getForeCastDetails.fulfilled, (state, action) => {
      state.forecast = action.payload;
      state.asyncStatus = "SUCCESS";
    });
    builder.addCase(getForeCastDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.asyncStatus = "FAILED";
    });
  },
});

export default weatherSlice.reducer;
