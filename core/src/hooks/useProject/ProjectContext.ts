import { createContext } from "react";
import { IProject } from "../../types";

export const ProjectContext = createContext<IProject>({} as any);