// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define types for API responses and requests

interface RootState {
  auth: {
    token: string;
  };
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:5000/api",
    baseUrl: "https://accountmanage.vercel.app/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      console.log("this is the token", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "recipe"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/auth",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    addBalance: builder.mutation({
      query: (addBalance) => {
        console.log("Adding balance:", addBalance); // Log the addBalance parameter
        return {
          url: `/auth/add-balance`, // Assuming the userId is inside addBalance
          method: "PUT",
          body: addBalance, // Sending the full addBalance object in the body
        };
      },
      invalidatesTags: ["user"],
    }),

    signUp: builder.mutation({
      query: (user) => {
        // Log the user object before sending the API request
        console.log("User being sent to API:", user);

        return {
          url: "/auth/create-user",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["user"],
    }),

    getAllUser: builder.query({
      query: () => ({
        url: `/auth`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    transferData: builder.mutation({
      query: (data) => ({
        url: `/auth/transfer-balance`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),




  }),
});

export const {
  useAddBalanceMutation,
  useTransferDataMutation,
  useGetAllUserQuery,
  useSignUpMutation,
} = baseApi;
