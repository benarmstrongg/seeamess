import { JavascriptFile } from "internal/content-types/JavascriptFile";

export interface IFilesContext {
    update(fileName: string, text: string): void;
    save(fileName: string, text: string): Promise<boolean>;
    files: JavascriptFile[];
}