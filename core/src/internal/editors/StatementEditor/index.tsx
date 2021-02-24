import React, { useMemo } from "react";
import { IEditor } from "../../../types/editor";
import { NodeView } from "../../../components/NodeView";
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';
import { ASTNode } from "../../../ast/ASTNode";
import { useEditor } from "../../../hooks";

export const StatementEditor: IEditor = () => {
    const { tsHelper } = useEditor();
    const fileAST = useMemo(() => tsHelper.getAST(), [tsHelper]);
    return (
        <div className="StatementEditorView">
            {!!fileAST && fileAST.statements.map(ASTNode.from).map(s => (
                <NodeView key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditor.button = (<><AiOutlineProfile />&nbsp;Statements</>);