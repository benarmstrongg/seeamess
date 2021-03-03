import { useContext } from "react";
import { ContentType } from "types/ContentType";
import { ContentContext } from "./ContentContext";

export function useContent<T extends ContentType>(contentType: new (...args: any) => T): T[] {
    return useContext(ContentContext)[contentType.name] as T[];
}