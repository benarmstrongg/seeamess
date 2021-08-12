import { ASTConstructor } from "ast";
import { FC, ReactElement } from "react";

export interface ContentExplorer extends FC {
    icon: ReactElement;
    contentTypes: ASTConstructor<any>[];
}