import { configureStore } from "@reduxjs/toolkit";
import map from "./map";

export default configureStore({
  reducer: { map },
  devTools: process.env.NODE_ENV !== "production",
});
