import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'myProjects',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://triptoafsin.github.io/API-Host/myProjects.json'
    }),
    endpoints: (builder) => ({
        getMyProjects: builder.query({
            query: () => `` //say your base url had something like this - www.test.com/${query} , here we leave it empty
        })
        //add more endpoints here
    })
})


export const { useGetMyProjectsQuery } = rtkApi