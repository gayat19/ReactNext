"use client";

import { BehaviorSubject } from "rxjs";


type AppState={
    username:string|null;
}

const initialState:AppState={
    username:null
}

const state$ = new BehaviorSubject<AppState>(initialState);

export const getState =()=>state$.getValue();

export const setState =(partial:Partial<AppState>)=>{
    state$.next({
        ...getState(),
        ...partial
    })
}

export const stateObservable$ = state$.asObservable();