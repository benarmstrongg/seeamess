import React from "react";
import { IEditorView } from "../../../../types/EditorView";
import { StatementEditor } from "./StatementEditor";
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';
import { ASTNode } from "../../../../code/ts-ast-wrapper/ASTNode";
import { useEditor } from "../../../../context";


export const StatementEditorView: IEditorView = () => {
    const { tsHelper } = useEditor();
    const fileAST = tsHelper.getAST();
    return (
        <div className="StatementEditorView">
            {!!fileAST && fileAST.statements.map(ASTNode.fromNode).map(s => (
                <StatementEditor key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditorView.button = (<><AiOutlineProfile />&nbsp;Statements</>);