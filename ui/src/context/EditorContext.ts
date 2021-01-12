import { createContext, useContext } from "react";
import { EditorViewState } from "../types/EditorView";


export const EditorContext = createContext<EditorViewState>({} as any);


export const useEditor = () => {
    return useContext(EditorContext);
}