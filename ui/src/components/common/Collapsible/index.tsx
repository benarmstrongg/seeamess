import React, { FC } from 'react';
import ReactCollapsible, { CollapsibleProps } from 'react-collapsible';
import './styles.scss';

export const Collapsible: FC<CollapsibleProps> = (props) => {
    return (
        <ReactCollapsible transitionTime={100} {...props} />
    );
}