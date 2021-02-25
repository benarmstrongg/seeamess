import React from "react";
import { IEditor } from "../../../types/editor";
import { NodeView } from "../../../components/NodeView";
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';
import { ASTNode } from "../../../ast/ASTNode";
import { SourceFile } from "../../../ast";

export const StatementEditor: IEditor = ({ content }) => {
    const file = content[0] as SourceFile;
    return (
        <div className="StatementEditorView">
            {!!file && file.statements.map(ASTNode.from).map(s => (
                <NodeView key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditor.button = (<><AiOutlineProfile />&nbsp;Statements</>);