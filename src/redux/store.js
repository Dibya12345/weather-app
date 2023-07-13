import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import weatherReducer from "./features/weatherSlice.js";

// const logger = createLogger();

const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
