import { createContext, useContext } from "react";
import { EditorState } from "../types/editor";


export const EditorContext = createContext<EditorState>({} as any);


export const useEditor = () => {
    return useContext(EditorContext);
}