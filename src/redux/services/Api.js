// using reduxtoolkit to fecth from api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f7286fa7abmshdcfc0e8418ff766p1a4dbfjsn4d8030d3f457"
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
  }),
});

export const {
  useGetWorldChartQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
} = api;
