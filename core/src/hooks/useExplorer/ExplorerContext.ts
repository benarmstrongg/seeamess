import { createContext } from "react";
import { IExplorer } from './types';

export const ExplorerContext = createContext<IExplorer>({} as any);