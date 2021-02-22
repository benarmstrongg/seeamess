import { createContext, useContext } from "react";
import { SeeamessState } from "../types";


export const SeeamessContext = createContext<SeeamessState>({} as any);


export const useSeeamess = () => {
    return useContext(SeeamessContext);
}