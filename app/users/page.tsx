// 'use client';


// import {  RootState } from "../lib/rstore";
// import { useAppDispatch, useAppSelector } from "../hooks/userHooks";
// import { useEffect } from "react";
// import { fetchUser } from "../lib/userSlice";

// const Users=()=>{

//     const dispatch = useAppDispatch();
//     const {items,loading,error} = useAppSelector((state:RootState)=>state.user);

//     useEffect(()=>{
//         dispatch(fetchUser())
//     },[dispatch]);

//     if(loading) return<p>Loading....</p>
//     if (error) return <p>{error}</p> 
//     return(<>
    
//         <table>
//             <thead>
//             <tr>
//                 <td>Id</td>
//                 <td>First Name</td>
//                  <td>Last Name</td>
//             </tr>
//             </thead>
//             <tbody>
//             {
//                 items.map((u)=><tr key={u.id}>
//                             <td>{u.id}</td>
//                             <td>{u.firstName}</td>
//                             <td>{u.firstName}</td>
//                     </tr>)
//             }
//             </tbody>
//         </table>
    
//     </>)
// }

// export default Users;

'use client';


import { useGetUsersQuery } from "../lib/api";



const Users=()=>{

    
    const {data,isLoading,isError} =useGetUsersQuery();

    

    if(isLoading) return<p>Loading....</p>
    if (isError) return <p>Error Loading User</p> 
    return(<>
    
        <table>
            <thead>
            <tr>
                <td>Id</td>
                <td>First Name</td>
                 <td>Last Name</td>
            </tr>
            </thead>
            <tbody>
            {
                data?.users.map((u:any)=><tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.firstName}</td>
                            <td>{u.firstName}</td>
                    </tr>)
            }
            </tbody>
        </table>
    
    </>)
}

export default Users;



