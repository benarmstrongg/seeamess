import React from "react";
import { NodeForm } from "../../";
import { Block } from "../../../ast";
import { NodeFormComponent } from "../types";

export const BlockForm: NodeFormComponent<Block> = ({ node }) => {
    return (
        <div className="BlockStatementEditor">
            {node.getStatements().map(s => (
                <NodeForm key={s.key} node={s} />
            ))}
        </div>
    );
}