import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Block } from "../../../../EditorContainer/ts-ast-wrapper/kinds/Block";

export const BlockEditor: IStatementEditor<Block> = ({ node }) => {
    return (
        <div className="BlockStatementEditor">
            {node.getStatements().map(s => (
                <StatementEditor key={s.key} node={s} />
            ))}
        </div>
    );
}