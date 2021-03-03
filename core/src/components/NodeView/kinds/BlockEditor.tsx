import React from "react";
import { NodeView } from "components";
import { Block } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const BlockEditor: IStatementEditor<Block> = ({ node }) => {
    return (
        <div className="BlockStatementEditor">
            {node.getStatements().map(s => (
                <NodeView key={s.key} node={s} />
            ))}
        </div>
    );
}