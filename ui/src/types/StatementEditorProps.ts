// import j from "jscodeshift";
import { ASTNode } from "jscodeshift";
import { FC } from "react";

type StatementEditorProps<T extends ASTNode, ExtraProps> =
    ExtraProps & {
        node: T;
        fieldName?: string;
        indent?: boolean;
        border?: boolean;
    }


export type IStatementEditor<T extends ASTNode, ExtraProps = {}> = FC<StatementEditorProps<T, ExtraProps>>;