import { createContext } from "react";
import { IContentContext } from "./types";

const defaultValue: IContentContext = {
    content: [],
    update: () => void 0
};

export const ContentContext = createContext<IContentContext>(defaultValue);