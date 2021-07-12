import React, { FC } from 'react';
import Container from './styles';
import ReactCollapsible, { CollapsibleProps } from 'react-collapsible';

export const Collapsible: FC<CollapsibleProps> = (props) => {
    return (
        <Container>
            <ReactCollapsible transitionTime={100} {...props} />
        </Container>
    );
}