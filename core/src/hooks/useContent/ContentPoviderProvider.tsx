import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { ReactFunctionComponent } from "../../plugins/react/content-types/FC";
import { ContentObjectMeta } from "../../types/ContentObjectMeta";
import { ContentType } from "../../types/ContentType";
import { useFiles } from "../useFiles";
import { ContentProviderContext } from "./ContentProviderContext";
import { IContentProviderContext } from "./types";

export const ContentProviderProvider: FC = ({ children }) => {
    const { files } = useFiles();
    const contentTypes: typeof ContentType[] = useMemo(() => [ReactFunctionComponent], []);
    const [contentProviders, setContentProviders] = useState<IContentProviderContext>({});

    useEffect(() => {
        const contentProvidersObj: IContentProviderContext = {};
        files.forEach(file => {
            contentTypes.forEach(contentType => {
                if (!file.node) {
                    return;
                }
                const content = file.node.find({}, [contentType as any]);
                const contentObjects: ContentObjectMeta<ContentType>[] = [];
                content.forEach(c => {
                    contentObjects.push({
                        containingFilePath: file.containingFilePath,
                        contentType: contentType.name,
                        objectName: c.seeamessId,
                        node: c,
                        text: c.getText()
                    });
                });
                contentProvidersObj[contentType.name] = createContext(contentObjects);
            })
        });
        setContentProviders(contentProvidersObj);
    }, [files, contentTypes]);

    return (
        <ContentProviderContext.Provider value={contentProviders}>
            {children}
        </ContentProviderContext.Provider>
    );
}
