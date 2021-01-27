import { createContext, useContext } from "react";
import { OutputViewState } from "../types/OutputView";

export const OutputContext = createContext<OutputViewState>({} as any);

export const useOutput = () => {
    return useContext(OutputContext);
}