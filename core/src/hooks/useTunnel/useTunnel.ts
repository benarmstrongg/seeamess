import { useContext } from "react"
import { TunnelContext } from "./TunnelContext"

export const useTunnel = () => {
    return useContext(TunnelContext);
}