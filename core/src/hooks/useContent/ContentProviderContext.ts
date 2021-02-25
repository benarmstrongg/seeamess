import { createContext } from "react";
import { IContentProviderContext } from "./types";

export const ContentProviderContext = createContext<IContentProviderContext>({});