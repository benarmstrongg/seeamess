import React from "react";
import { JsxSelfClosingElement } from "ast";
import { NodeFormComponent } from "../types";
import { Collapsible, NodeFormHeading } from "components";
import { JsxOpeningElementForm } from "components/nodeviews";

export const JsxSelfClosingElementForm: NodeFormComponent<JsxSelfClosingElement> = ({ node }) => {
    const openingElement = node.getOpeningElement();
    const collapsibleHeader = `<${openingElement.getTagName()} />` || 'JSX Self Closing Element';
    return (
        <div className="JsxSelfClosingElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="JSX Self Closing Element" />
                </div>
                <JsxOpeningElementForm node={openingElement} />
            </Collapsible>
        </div>
    );
}