// using reduxtoolkit to fecth from api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "b5320bb55cmshe126bd4110d2619p1e005bjsn5e548279daf3 "
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldChart: builder.query({
      query: () => `/charts/world`,
    }),
  }),
});

export const { useGetWorldChartQuery } = api;
