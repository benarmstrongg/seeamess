// import j from "jscodeshift";
import { FC } from "react";
import { ASTNode } from "../ast";

type StatementEditorProps<T extends ASTNode, ExtraProps> =
    ExtraProps & {
        node: T;
        fieldName?: string;
        indent?: boolean;
        border?: boolean;
    }


export type IStatementEditor<T extends ASTNode, ExtraProps = {}> = FC<StatementEditorProps<T, ExtraProps>>;