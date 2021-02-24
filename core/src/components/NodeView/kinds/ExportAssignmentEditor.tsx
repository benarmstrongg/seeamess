import React from "react";
import { NodeView } from "..";
import { ExportAssignment } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

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
                    <StatementEditorTitle text="Name" />
                    <NodeView node={node.expression} />
                </div>
            </Collapsible>
        </div>
    );
}