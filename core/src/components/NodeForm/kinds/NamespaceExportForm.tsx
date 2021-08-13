import React from "react";
import { NodeForm, NodeFormHeading } from "../../";
import { NamespaceExport } from "../../../ast";
import { NodeFormComponent } from "../types";

export const NamespaceExportForm: NodeFormComponent<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <NodeFormHeading text="name" />
            <NodeForm node={node.name} />
        </div>
    )
}