import { createContext } from "react";
import { SeeamessConfig } from "../../types";

export const ConfigContext = createContext<SeeamessConfig>({} as any);