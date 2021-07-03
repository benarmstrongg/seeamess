import { ASTConstructor } from "ast";
import { FC, ReactElement } from "react";

export interface ContentExplorer extends FC {
    button: ReactElement;
    contentTypes: ASTConstructor<any>[];
}