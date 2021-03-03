import { createContext } from "react";
import { IFilesContext } from "./types";

const defaultValue: IFilesContext = {
    files: [],
    update: () => void 0,
    save: async () => false,
};

export const FilesContext = createContext<IFilesContext>(defaultValue);