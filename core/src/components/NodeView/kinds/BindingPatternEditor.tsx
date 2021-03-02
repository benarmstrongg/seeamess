import React from "react";
import { NodeView } from "../../";
import { ArrayBindingPattern, ObjectBindingPattern } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";

export const BindingPatternEditor: IStatementEditor<ArrayBindingPattern | ObjectBindingPattern> =
    ({ node }) => {
        return (
            <div className="BindingPatternEditor">
                {node.getElements().map(e => <NodeView key={e.key} node={e} />)}
            </div>
        );
    }