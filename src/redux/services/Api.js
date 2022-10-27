// using reduxtoolkit to fecth from api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
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
