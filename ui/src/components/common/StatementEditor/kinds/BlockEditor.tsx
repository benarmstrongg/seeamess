import React from "react";
import { StatementEditor } from "..";
import { Block } from "../../../../code/ts-ast-wrapper/kinds/Block";
import { IStatementEditor } from "../../../../types/StatementEditorProps";

export const BlockEditor: IStatementEditor<Block> = ({ node }) => {
    return (
        <div className="BlockStatementEditor">
            {node.getStatements().map(s => (
                <StatementEditor key={s.key} node={s} />
            ))}
        </div>
    );
}