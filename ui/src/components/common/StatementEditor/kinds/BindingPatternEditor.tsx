import React from "react";
import { StatementEditor } from "..";
import { ArrayBindingPattern } from "../../../../code/ts-ast-wrapper/kinds/ArrayBindingPattern";
import { ObjectBindingPattern } from "../../../../code/ts-ast-wrapper/kinds/ObjectBindingPattern";
import { IStatementEditor } from "../../../../types/StatementEditorProps";

export const BindingPatternEditor: IStatementEditor<ArrayBindingPattern | ObjectBindingPattern> =
    ({ node }) => {
        return (
            <div className="BindingPatternEditor">
                {node.getElements().map(e => <StatementEditor key={e.key} node={e} />)}
            </div>
        );
    }