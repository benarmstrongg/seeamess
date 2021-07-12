import React, { FC, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styled from 'styled-components';

interface ExplorerSectionProps {
    displayName: string;
    icon?: FC;
    indentLevel?: number;
}

export const ExplorerGroup: FC<ExplorerSectionProps> = ({ children, displayName, icon, indentLevel = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    const Icon = icon;

    return (
        <Container>
            <div className="Header" onClick={() => setExpanded(!expanded)}>
                <>
                    {expanded === true ? <FaCaretDown /> : <FaCaretUp />}
                    {!!Icon ? <Icon /> : null}
                </>
                <>&nbsp;</>
                <span>{displayName}</span>
            </div>
            {expanded === true ? children : null}
        </Container>
    );
}

const Container = styled.div`
    .Header {
        cursor: pointer;
        position: relative;
        user-select: none;

        &:hover {
            background-color: lightgray;
        }
    }
    
    :not(.Header):not(:nth-child(1)) {
        padding-left: 10px;
    }
`;