import React from "react";
import { IEditorView } from "../../../../../types/EditorView";
import { StatementEditor } from "./StatementEditor";
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';
import { ASTNode } from "../../../../../code/ts-ast-wrapper/ASTNode";


export const StatementEditorView: IEditorView = ({ ast }) => {
    const program = ast?.sourceFile;

    return (
        <div className="StatementEditorView">
            {!!program && program.statements.map(ASTNode.fromNode).map((statement, i) => (
                <StatementEditor key={statement.key} node={statement} />
            ))}
        </div>
    );
}

StatementEditorView.button = (<><AiOutlineProfile />&nbsp;Statements</>);