import { createContext } from "react";
import { IEditor } from "./types";

export const EditorContext = createContext<IEditor>({} as any);