const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentPos: {
    Lat: 37.57002838826,
    Lng: 126.97962084516,
  },
  near: 0,
};
const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    getCurrentPos: (state, action) => {
      state.currentPos.Lat = action.payload.Lat;
      state.currentPos.Lng = action.payload.Lng;
    },
    countNear: (state, action) => {
      state.near = action.payload.near;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const { getCurrentPos, countNear } = mapSlice.actions;
export default mapSlice.reducer;
