// import j from "jscodeshift";
import { FC } from "react";
import { AST } from "ast";

type StatementEditorProps<T extends AST, ExtraProps> =
    ExtraProps & {
        node: T;
        fieldName?: string;
        indent?: boolean;
        border?: boolean;
    }


export type IStatementEditor<T extends AST, ExtraProps = {}> = FC<StatementEditorProps<T, ExtraProps>>;