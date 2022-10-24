// using reduxtoolkit to fecth from api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "1d94da288amsh002d0f0eab872f1p1a9712jsn906d5d9188f0"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldChart: builder.query({
      query: () => `/charts/world`,
    }),
    getSongDetails: builder.query({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
    getRelatedSongs: builder.query({
      query: (songid) => `/tracks/related?track_id=${songid}`,
    }),
    getSongsByCountry: builder.query({
      query: (country) => `/charts/country?country_code=${country}`,
    }),
    getSongsBySearch: builder.query({
      query: (search) =>
        `/search/multi?query=${search}&search_type=SONGS_ARTISTS`,
    }),
  }),
});

export const {
  useGetWorldChartQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = api;
