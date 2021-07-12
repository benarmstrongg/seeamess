import { AST } from "ast";
import { useTabs } from "hooks";
import React, { FC } from "react";
import styled from 'styled-components';

interface ExplorerItemProps {
    obj: AST;
    icon?: FC;
    displayName?: string
}

export const ExplorerItem: FC<ExplorerItemProps> = ({ obj, icon, displayName }) => {
    const tabs = useTabs();
    const Icon = icon;
    return (
        <Container onClick={() => tabs.open(obj)}>
            {!!Icon ? <Icon /> : null}
            <>&nbsp;</>
            <span>{displayName || obj.constructor.name}</span>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
    position: relative;
    padding-left: 10px;
    user-select: none;
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        background-color: lightgray;
    }
`;