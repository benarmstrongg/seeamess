import React from 'react';
import { LiteralLikeNode } from '../../../../../../code/ts-ast-wrapper/kinds/LiteralLikeNode';
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { ASTNodeInput } from '../../../../../common/ASTNodeInput';


export const LiteralEditor: IStatementEditor<LiteralLikeNode> = (props) => {
    const { node, fieldName = '' } = props;
    const { text } = node;
    return (
        <span className="LiteralEditor">
            {fieldName}
            <ASTNodeInput {...props} placeholder={fieldName} node={node} value={text} />
        </span>
    )
}