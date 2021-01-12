import { ArrayPattern } from "jscodeshift";
import React from "react";
import { getStatementEditorKey, StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";

export const ArrayPatternEditor: IStatementEditor<ArrayPattern> = ({ node }) => {
    const { elements } = node;
    return (
        <div className="ArrayPatternEditor">
            <p>Array destructure pattern</p>
            {elements.map((elem, i) => (
                <StatementEditor key={getStatementEditorKey(elem, i)} node={elem} />
            ))}
        </div>
    )
}