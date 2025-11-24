
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/user'}),
    endpoints:(builder)=>({
        getUsers:builder.query<any,void>({
            query:()=>""
        }),
        createUser:builder.mutation<any,{firstName:string;lastName:string,age:number}>({
            query:(body)=>({
                url:'/add',
                method:'POST',
                body
            })
        })
    })
})

export const {useGetUsersQuery,useCreateUserMutation} = api;
