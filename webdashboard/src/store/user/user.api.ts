import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "../../models/models";
export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
  }),
  endpoints: (build) => ({
    getAllCustomers: build.query<IUsers[], { limit: number; search?: string; gender?: string, country?: string }>({
      query: ({ limit, search, gender, country }) => ({
        url: `customers`,
        params: {
          limit,
          search,
          gender, 
          country
        },
      }),
    }),
    getAllGenders: build.query<string[], string>({
      query: () => ({
        url: `customers/genders`,
      }),
    }),
    getAllCountries: build.query<string[], string>({
      query: () => ({
        url: `customers/countries`,
      }),
    }),
  }),
});

export const {useGetAllCustomersQuery, useGetAllGendersQuery, useGetAllCountriesQuery} = userApi
