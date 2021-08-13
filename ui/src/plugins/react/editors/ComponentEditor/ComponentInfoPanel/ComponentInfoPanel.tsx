import React, { FC } from 'react';
import styled from 'styled-components';
import { Collapsible, NodeForm } from '@seeamess/core';
import { ReactFunctionComponent } from '../../../content-types/FC';

interface ComponentInfoPanelProps {
    component: ReactFunctionComponent;
}

export const ComponentInfoPanel: FC<ComponentInfoPanelProps> = ({ component }) => {
    return (
        <Container>
            {component.getName()}
            {!!component.props && (
                <Collapsible trigger="Props">
                    {component.props.array.map(p => <NodeForm key={p.getName()} node={p} />)}
                </Collapsible>
            )}
        </Container>
    );
}

const Container = styled.div`
    border-right: 1px solid lightgray;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    width: 20%;
    padding: 5px;
`;