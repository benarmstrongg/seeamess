import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { ExportAssignment } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const ExportAssignmentEditor: IStatementEditor<ExportAssignment> = ({ node }) => {
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
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.expression} />
                </div>
            </Collapsible>
        </div>
    );
}