"use client";

import {  useEffect, useState } from "react";
import { stateObservable$ } from "../lib/store";
import { Subscription } from "rxjs";


export function useStore(){
    const [state,setState] = useState(()=>{
        let value:any;
        const sub = stateObservable$.subscribe((v)=>value=v);
        sub.unsubscribe();
        return value;
    });

    useEffect(()=>{
        const sub:Subscription = stateObservable$.subscribe((v)=>setState(v));
        return()=>sub.unsubscribe();
    },[])

    return state;
}