import React, { useMemo } from "react";
import { IEditorView } from "../../../../types/EditorView";
import { StatementEditor } from "../../../common/StatementEditor";
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';
import { ASTNode } from "../../../../code/ts-ast-wrapper/ASTNode";
import { useEditor } from "../../../../context";

export const StatementEditorView: IEditorView = () => {
    const { tsHelper } = useEditor();
    const fileAST = useMemo(() => tsHelper.getAST(), [tsHelper]);
    return (
        <div className="StatementEditorView">
            {!!fileAST && fileAST.statements.map(ASTNode.from).map(s => (
                <StatementEditor key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditorView.button = (<><AiOutlineProfile />&nbsp;Statements</>);