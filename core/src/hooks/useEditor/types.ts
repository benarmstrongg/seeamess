import { ContentType } from "../../types/ContentType";

export interface IEditorContext<T extends ContentType> {
    content: T
}