import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      //
    }
  }
});

const Store = configureStore({
  reducer: {
    songs: songSlice.reducer
  }
});
