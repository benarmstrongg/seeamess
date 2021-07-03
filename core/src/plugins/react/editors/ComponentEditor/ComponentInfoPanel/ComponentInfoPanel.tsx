import React, { FC } from 'react';
import { Collapsible, NodeForm } from 'components';
import { ReactFunctionComponent } from '../../../content-types/FC';
import './styles.scss';

interface ComponentInfoPanelProps {
    component: ReactFunctionComponent;
}

export const ComponentInfoPanel: FC<ComponentInfoPanelProps> = ({ component }) => {
    return (
        <div className="ComponentInfoPanel">
            {component.getName()}
            {!!component.props && (
                <Collapsible trigger="Props">
                    {component.props.array.map(p => <NodeForm key={p.getName()} node={p} />)}
                </Collapsible>
            )}
        </div>
    );
}