import React from "react";
import { AiOutlineProfile } from 'react-icons/ai';
import { ContentEditor, NodeForm, AST, ast, useTabs } from '@seeamess/core';
import Container from './styles';

export const StatementEditor: ContentEditor = () => {
    const { activeTab } = useTabs();
    return (
        <Container>
            {activeTab.obj.getChildNodes().map(ast).map(s => (
                <NodeForm key={s.key} node={s} />
            ))}
        </Container>
    );
}

StatementEditor.icon = <AiOutlineProfile />;

StatementEditor.contentTypes = [AST];