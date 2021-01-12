import { createContext, useContext, Dispatch } from "react";
import { AppState, AppDispatch } from "../types";


export const SeeamessContext = createContext<{ state: AppState, dispatch: Dispatch<AppDispatch> }>
    ({ state: {} as any, dispatch: () => null });


export const useSeeamess = () => {
    return useContext(SeeamessContext);
}