import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSong = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSong = action.payload?.data?.tracks;
      } else {
        state.currentSong = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSong[action.payload]?.track) {
        state.activeSong = state.currentSong[action.payload]?.track;
      } else {
        state.activeSong = state.currentSong[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSong[action.payload]?.track) {
        state.activeSong = state.currentSong[action.payload]?.track;
      } else {
        state.activeSong = state.currentSong[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause } =
  playerSlice.actions;

export default playerSlice.reducer;
