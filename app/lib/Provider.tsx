"use client";

import { Provider } from "react-redux";
import { rstore } from "./rstore";

type Props={
    children:React.ReactNode
};

export function ReduxProvider({children}:Props){
    return <Provider store={rstore}>{children}</Provider>
}