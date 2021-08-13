import { FC } from "react";
import { AST } from "../../ast";

type NodeFormProps<T extends AST, ExtraProps> =
    ExtraProps & {
        node: T;
        fieldName?: string;
        indent?: boolean;
        border?: boolean;
    }


export type NodeFormComponent<T extends AST, ExtraProps = {}> = FC<NodeFormProps<T, ExtraProps>>;