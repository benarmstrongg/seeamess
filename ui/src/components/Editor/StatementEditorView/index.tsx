import React from "react";
import { IEditorView } from "../../../types/EditorView";
import { StatementEditor } from "./StatementEditor";
import jscodeshift from 'jscodeshift';
import { AiOutlineProfile } from 'react-icons/ai';
import './styles.scss';


export const StatementEditorView: IEditorView = ({ ast }) => {
    const program = ast?.find(jscodeshift.Program).nodes()[0];

    return (
        <div className="StatementEditorView">
            {!!program && program.body.map((statement, i) => (
                <StatementEditor key={statement.type.concat(i.toString())} node={statement} />
            ))}
        </div>
    );
}

StatementEditorView.button = (<><AiOutlineProfile />&nbsp;Statements</>);