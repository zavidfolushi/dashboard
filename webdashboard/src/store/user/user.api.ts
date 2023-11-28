import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrders, IUsers } from "../../models/models";
export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
  }),
  endpoints: (build) => ({
    getAllCustomers: build.query<
      IUsers[],
      { limit: number; search?: string; gender?: string; country?: string }
    >({
      query: ({ limit, search, gender, country }) => ({
        url: `customers`,
        params: {
          limit,
          search,
          gender,
          country,
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
    getCustomerInfo: build.query<IUsers, { fullName: string | undefined }>({
      query: ({ fullName = "" }) => ({
        url: `customers/${fullName}`,
      }),
    }),
    getOrders: build.query<IOrders[], { limit: number }>({
      query: ({ limit }) => ({
        url: `orders`,
        params: {
          limit,
        },
      }),
    }),
  }),
});

export const {useGetAllCustomersQuery, useGetAllGendersQuery, useGetAllCountriesQuery, useGetCustomerInfoQuery, useGetOrdersQuery} = userApi
