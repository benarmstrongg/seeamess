import { ContentObjectMeta } from "../../types/ContentObjectMeta";

export interface IFilesContext {
    update(fileName: string, text: string): void;
    save(fileName: string, text: string): Promise<boolean>;
    files: ContentObjectMeta[];
}