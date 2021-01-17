import React from "react";
import { StatementEditor } from "..";
import { ReturnStatement } from "../../../../../../../code/ts-ast-wrapper/kinds/ReturnStatement";
import { IStatementEditor } from "../../../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../../../common/Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const ReturnStatementEditor: IStatementEditor<ReturnStatement> = ({ node }) => {
    return (
        <div className="ReturnStatementEditor">
            <Collapsible trigger="Return Statement">
                {!!node.expression && (
                    <>
                        <StatementEditorTitle text="Expression" />
                        <StatementEditor node={node.expression} />
                    </>
                )}
            </Collapsible>
        </div>
    );
}