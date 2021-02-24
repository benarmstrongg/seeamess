import { ASTNode } from "../ast";
import { ContentObject } from "./ContentObject";
import { SeeamessConfig } from "./SeeamessConfig";

export interface SeeamessState {
    content: {
        files: {
            [filePath: string]: ContentObject
        }
    };
    config: SeeamessConfig;
    openTabs: ContentObject[];
    activeTab: number;
    getContent(contentType: string, objectName: string): ContentObject | undefined;
    setContent(contentType: string, objectName: string, value: ASTNode | string): boolean;
    saveContent(contentType: string, objectName: string): Promise<boolean>;
    openTab(contentType: string, objectName: string): void;
    closeTab(index: number): void;
    changeTab(index: number): void;
}

