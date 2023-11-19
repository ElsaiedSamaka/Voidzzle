import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Brand } from "../models/index";
import { HttpReqeusttypes } from "core/types";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using a base URL and expected endpoints
export const brandsApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["Brands"],

  /**
   * Returns an object containing various endpoints for interacting with cars.
   * @param {Function} builder - The builder function.
   * @return {Object} - The object containing the endpoints.
   */
  endpoints: (builder) => ({
    /**
     * Retrieves all brands.
     * @returns {Array<Brand>} - The array of brands.
     */
    getBrands: builder.query<Brand[], void>({
      query: () => `brands`,
      providesTags: ["Brands"],
    }),

    /**
     * Retrieves a brand by its name.
     * @param {string} name - The name of the brand.
     * @returns {Brand} - The brand object.
     */
    getBrandsByName: builder.query<Brand[], string>({
      query: (name) => `brands?name_like=${name}`,
      providesTags: ["Brands"],
    }),

    /**
     * Adds a new brand.
     * @param {Partial<Brand>} brand - The brand object to add.
     * @returns {Brand} - The added brand object.
     */
    addCar: builder.mutation<Brand, Partial<Brand>>({
      query: (brand) => ({
        url: `brands`,
        method: HttpReqeusttypes.POST,
        body: brand,
      }),
      invalidatesTags: ["Brands"],
    }),

    /**
     * Updates an existing brand.
     * @param {Partial<Brand>} brand - The brand object to update.
     * @returns {Brand} - The updated brand object.
     */
    updateBrand: builder.mutation<Brand, Partial<Brand>>({
      query: (brand) => ({
        url: `brands/${brand.id}`,
        method: HttpReqeusttypes.PATCH,
        body: brand,
      }),
      invalidatesTags: ["Brands"],
    }),

    /**
     * Deletes a brand by its ID.
     * @param {string} id - The ID of the brand to delete.
     * @returns {Brand} - The deleted brand object.
     */
    deleteBrand: builder.mutation<Brand, string>({
      query: (id) => ({
        url: `brands/${id}`,
        method: HttpReqeusttypes.DELETE,
      }),
      invalidatesTags: ["Brands"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandsQuery, useGetBrandsByNameQuery } = brandsApi;
// usage example
  // API call
  // const {
  //   data = [],
  //   error,
  //   isError,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  // } = useGetBrandsQuery();