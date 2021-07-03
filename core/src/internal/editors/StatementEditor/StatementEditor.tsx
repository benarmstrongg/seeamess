import React from "react";
import { ContentEditor } from "types/editor";
import { NodeForm } from "components";
import { AiOutlineProfile } from 'react-icons/ai';
import { AST, ast } from "ast";
import { useTabs } from "hooks";
import './styles.scss';

export const StatementEditor: ContentEditor = () => {
    const { activeTab } = useTabs();
    return (
        <div className="StatementEditorView">
            {activeTab.getChildNodes().map(ast).map(s => (
                <NodeForm key={s.key} node={s} />
            ))}
        </div>
    );
}

StatementEditor.button = (<><AiOutlineProfile />&nbsp;Statements</>);

StatementEditor.contentTypes = [AST];