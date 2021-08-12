import { FC, ReactElement } from "react";
import { ASTConstructor } from "ast";


export interface ContentEditor extends FC {
    icon: ReactElement;
    contentTypes: ASTConstructor<any>[];
    ignoreSourceFiles?: boolean;
}