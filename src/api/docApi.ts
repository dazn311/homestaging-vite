
import { baseApi } from './baseApi.ts'

// NOTE: these are the _SAME_ API reference!
const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery } = extendedApi;
