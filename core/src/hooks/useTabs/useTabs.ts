import { useContext } from "react"
import { TabsContext } from "./TabsContext"

export const useTabs = () => {
    return useContext(TabsContext);
}