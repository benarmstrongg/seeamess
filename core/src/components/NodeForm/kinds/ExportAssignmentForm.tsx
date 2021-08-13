import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { ExportAssignment } from "../../../ast";
import { NodeFormComponent } from "../types";

export const ExportAssignmentForm: NodeFormComponent<ExportAssignment> = ({ node }) => {
    const getCollapsibleHeader = () => {
        let suffix = '';
        if (node.isDefaultExport === true) {
            suffix += 'default ';
        }
        else if (node.isExportEquals === true) {
            suffix += '= ';
        }
        suffix += node.getExpressionText();
        return suffix !== '' ? `export ${suffix}` : 'Export Assignment';
    }
    return (
        <div className="ExportAsssignmentEditor">
            <Collapsible trigger={getCollapsibleHeader()}>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.expression} />
                </div>
            </Collapsible>
        </div>
    );
}