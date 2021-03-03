import { useContext } from "react"
import { ConfigContext } from "./ConfigContext"

export const useConfig = () => {
    return useContext(ConfigContext);
}