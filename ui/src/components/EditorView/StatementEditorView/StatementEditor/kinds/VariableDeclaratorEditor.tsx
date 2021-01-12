import React from 'react';
import { VariableDeclarator } from "jscodeshift";
import { IStatementEditor } from '../../../../../types/StatementEditorProps';
import { StatementEditor } from '..';

export const VariableDeclaratorEditor: IStatementEditor<VariableDeclarator> = ({ node, fieldName }) => {
    const { id, init } = node;
    return (
        <div className="VariableDeclaratorEditor">
            <StatementEditor node={id} fieldName={fieldName} />
            <div>
                <h5>Value</h5>
                <>&nbsp;&nbsp;</>
                <StatementEditor node={init} />
            </div>
        </div>
    )
}