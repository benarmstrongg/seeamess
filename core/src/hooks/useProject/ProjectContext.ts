import { createContext } from "react";
import { IProject } from "types/project";

export const ProjectContext = createContext<IProject>({} as any);