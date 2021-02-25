import React, { useContext, useState } from "react"
import { ASTNode } from "../../ast";
import { ContentProviderContext } from "./ContentProviderContext";
import { IContentContext as C, WithContentFn } from "./types";
import { ContentProvider } from "./ContentProvider";


const WithContent: WithContentFn = (contentType, component) => {
    const providers = useContext(ContentProviderContext);
    const [content, setContent] = useState(useContext(providers[contentType.name]));

    const update: C['update'] = (objectName, value) => {
        const objectIndex = content.findIndex(c => c.objectName === objectName);
        const obj = content[objectIndex];
        if (objectIndex === -1) {
            return;
        }
        if (value instanceof ASTNode) {
            content.splice(objectIndex, 1, { ...obj, node: value, text: value.getText() });
        }
        else {
            content.splice(objectIndex, 1, { ...obj, text: value, }); //node: tshelper?(value) });
        }
        setContent(content);
    }

    const Comp = component;
    return (
        <ContentProvider content={content} update={update}>
            <Comp content={content.map(c => c.node)} update={update} />
        </ContentProvider>
    );
}

export const withContent = WithContent;