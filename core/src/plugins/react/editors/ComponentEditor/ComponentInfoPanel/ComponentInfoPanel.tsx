import React, { FC } from 'react';
import { Collapsible, NodeView } from 'components';
// import { ASTNodeInput } from 'components/common/ASTNodeInput';
import { ReactFunctionComponent } from '../../../content-types/FC';
import './styles.scss';

interface ComponentInfoPanelProps {
    component: ReactFunctionComponent;
}

export const ComponentInfoPanel: FC<ComponentInfoPanelProps> = ({ component }) => {
    return (
        <div className="ComponentInfoPanel">
            {component.componentName}
            <Collapsible trigger="Props">
                {component.props.map(p => <NodeView node={p.parent} />)}
            </Collapsible>
        </div>
    );
}