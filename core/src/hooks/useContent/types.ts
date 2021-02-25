import { Context, ReactElement } from "react";
import { ASTNode } from "../../ast";
import { ContentObjectMeta } from "../../types/ContentObjectMeta";
import { ContentType } from "../../types/ContentType";
import { IEditor } from "../../types/editor";


export interface IContentProviderContext<T extends ContentType = ContentType> {
    [contentType: string]: Context<ContentObjectMeta<T>[]>;
}

export interface IContentContext<T extends ContentType = ContentType> {
    content: ContentObjectMeta<T>[];
    update(objectName: string, value: ASTNode | string): void;
}

export interface ContentPoviderProps {
    content: IContentContext['content'];
    update: IContentContext['update'];
}

export type WithContentComponent = (contentType: typeof ASTNode, component: IEditor) => ReactElement<ContentPoviderProps>;
export type WithContentFn = (contentType: typeof ASTNode, component: IEditor) => IEditor;