import { AST } from "ast";
import { useTabs } from "hooks";
import React, { FC, ReactElement } from "react";
import styled from 'styled-components';

interface ExplorerItemProps {
    obj: AST;
    icon?: ReactElement;
    displayName?: string
}

export const ExplorerItem: FC<ExplorerItemProps> = ({ obj, icon, displayName }) => {
    const { open } = useTabs();
    const name = displayName || obj.containingFileName;
    return (
        <Container onClick={() => open({ obj, name, icon })}>
            {!!icon && icon}
            <>&nbsp;</>
            <span>{displayName || obj.constructor.name}</span>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 2px;
    border-radius: 3px;
    
    &:hover {
        background-color: lightgray;
    }
`;