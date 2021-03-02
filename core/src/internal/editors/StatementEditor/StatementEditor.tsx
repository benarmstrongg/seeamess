import React from "react";
import { IEditor } from "../../../types/editor";
import { NodeView } from "../../../components";
import { AiOutlineProfile } from 'react-icons/ai';
import { ASTNode } from "../../../ast/ASTNode";
import { useEditor } from "../../../hooks";
import './styles.scss';

export const StatementEditor: IEditor = () => {
    const { content } = useEditor();
    return (
        <div className="StatementEditorView">
            {content.getChildNodes().map(ASTNode.from).map(s => (
                <NodeView key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditor.button = (<><AiOutlineProfile />&nbsp;Statements</>);