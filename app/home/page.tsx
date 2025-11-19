"use client";


import { useStore } from "../hooks/useStore";
import { setState } from "../lib/store";

const Home=()=>{

    const {username}  = useStore();

    const setName = ()=>{
        const name = prompt("Please enter your name")||null;
        setState({username:name})
    }

    return(<>
    <h1>Hello - <strong>{username??"No name set yet"}</strong></h1>

        <button onClick={setName}>Change Name</button>
    
    </>)
}

export default Home;