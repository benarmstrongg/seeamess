import { useContext } from "react";
import { ContentContext } from "./ContentContext";

export const useContent = () => {
    return useContext(ContentContext);
}