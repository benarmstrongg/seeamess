import { useContext } from "react"
import { ProjectContext } from "./ProjectContext"

export const useProject = () => {
    return useContext(ProjectContext);
}