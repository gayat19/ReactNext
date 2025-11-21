import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"


export const fetchUser = createAsyncThunk('user/fetchUser',async()=>{
    const result = await fetch('https://dummyjson.com/users') ;
    return (await result.json()).users as any[];
})

// interface UserState{
//     username:string|null
// }

interface UsersState{
    items:any[],
    loading:boolean,
    error:string|null
}

const initialState:UsersState={
    items:[],
    loading:false,
    error:null
}

// const initialState:UserState={
//     username:null
// }

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // setusername(state,action:PayloadAction<string>){
        //     state.username = action.payload;
        // },
        // removerusername(state){
        //     state.username = null;
        // }

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true,
            state.error = null
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.items = action.payload;
            state.loading = false
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message??'Error in call'
        })
    },
})

// export const {setusername,removerusername} = userSlice.actions;
 export default userSlice.reducer;