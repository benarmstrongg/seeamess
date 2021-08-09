import React, { FC, ReactElement, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styled from 'styled-components';

interface ExplorerSectionProps {
    displayName: string;
    icon?: ReactElement;
    indentLevel?: number;
}

export const ExplorerGroup: FC<ExplorerSectionProps> = ({ children, displayName, icon }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Container>
            <div className="Header" onClick={() => setExpanded(!expanded)}>
                <>
                    {expanded === true ? <FaCaretDown /> : <FaCaretUp />}
                    {!!icon && icon}
                </>
                <>&nbsp;</>
                <span>{displayName}</span>
            </div>
            {expanded === true ? children : null}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;

    .Header {
        cursor: pointer;
        position: relative;
        user-select: none;
        width: 100%;
        border-radius: 3px;
        padding: 2px;

        &:hover {
            background-color: lightgray;
        }
    }
    
    :not(.Header):not(:nth-child(1)) div:not(.Header) {
        padding-left: 10px;
    }
`;