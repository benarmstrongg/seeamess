import React from 'react';
import { ArrowFunction } from 'ast';
import { NodeFormComponent } from "../types";
import { Collapsible } from 'components';
import { FunctionExpressionForm } from 'components/nodeviews';

export const ArrowFunctionForm: NodeFormComponent<ArrowFunction> = ({ node }) => {
    return (
        <div className="ArrowFunctionEditor">
            <Collapsible trigger="Arrow Function">
                <FunctionExpressionForm node={node.getExpression()} />
            </Collapsible>
        </div>
    )
}