import { useContext } from "react"
import { FilesContext } from "./FilesContext"

export const useFiles = () => {
    return useContext(FilesContext);
}