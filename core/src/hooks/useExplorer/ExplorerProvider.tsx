import { ast, AST, SourceFile } from "../../ast";
import { useProject } from "../../hooks";
import React, { FC, useEffect, useState } from "react";
import { ContentExplorer } from "../../types";
import { ExplorerContext } from "./ExplorerContext";
import { IExplorer } from "./types";

interface ExplorerProviderProps {
    contentExplorer: ContentExplorer;
}

export const ExplorerProvider: FC<ExplorerProviderProps> = ({ children, contentExplorer }) => {
    const { contentTypes } = contentExplorer;
    const [content, setContent] = useState<IExplorer['content']>(new Map());
    const { files, program } = useProject();

    useEffect(() => {
        const contentMap: IExplorer['content'] = new Map();
        contentTypes.forEach(contentType => {
            const _content: AST[] = [];
            files.forEach(file => {
                const sourceFile = program.getSourceFile(file.path);
                if (sourceFile) {
                    const $sourceFile = ast(sourceFile).to(SourceFile);
                    if (contentType === SourceFile) {
                        _content.push($sourceFile);
                    }
                    else {
                        _content.push(...$sourceFile.filter(contentType));
                    }
                }
            });
            contentMap.set(contentType, _content);
        });
        setContent(contentMap);
    }, [files, program, contentTypes]);

    return (
        <ExplorerContext.Provider value={{ content }}>
            {children}
        </ExplorerContext.Provider>
    );
}