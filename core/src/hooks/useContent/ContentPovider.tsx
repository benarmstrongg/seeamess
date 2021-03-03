import React, { FC, useEffect, useMemo, useState } from "react";
import { JavascriptFile } from "internal/content-types/JavascriptFile";
import { ReactFunctionComponent } from "plugins/react/content-types/FC";
import { ContentType } from "types/ContentType";
import { useFiles } from "hooks/useFiles";
import { ContentContext } from "./ContentContext";
import { IContentContext } from "./types";

export const ContentProvider: FC = ({ children }) => {
    const { files } = useFiles();
    const contentTypes: typeof ContentType[] = useMemo(() => [ReactFunctionComponent], []);
    const [content, setContentProviders] = useState<IContentContext>({});

    useEffect(() => {
        const _content: { [contentType: string]: ContentType[] } = {};
        files.forEach(file => {
            contentTypes.forEach(contentType => {
                if (_content[contentType.name] === undefined) {
                    _content[contentType.name] = [];
                }
                _content[contentType.name].push(...file.find({}, [contentType as any]) as ContentType[]);
            })
        });
        _content[JavascriptFile.name] = files;
        setContentProviders(_content);
    }, [files, contentTypes]);

    return (
        <ContentContext.Provider value={content}>
            {children}
        </ContentContext.Provider>
    );
}
