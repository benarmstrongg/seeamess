import React from "react";
import { ContentEditor } from "types/editor";
import { NodeForm } from "components";
import { AiOutlineProfile } from 'react-icons/ai';
import { AST, ast } from "ast";
import { useTabs } from "hooks";
import Container from './styles';

export const StatementEditor: ContentEditor = () => {
    const { activeTab } = useTabs();
    return (
        <Container>
            {activeTab.getChildNodes().map(ast).map(s => (
                <NodeForm key={s.key} node={s} />
            ))}
        </Container>
    );
}

StatementEditor.button = (<AiOutlineProfile />);

StatementEditor.contentTypes = [AST];