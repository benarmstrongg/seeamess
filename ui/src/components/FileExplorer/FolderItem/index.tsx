import React, { FC, useState } from "react";
import { ItemRow } from "../ItemRow";
import { treeItemToComponent } from "../util";

export const FolderItem: FC<{ folderName: string, folderContents: any, indentLevel?: number, onFileClick: (filePath: string) => void }>
    = ({ folderName, folderContents, indentLevel = 0, onFileClick }) => {
        const [expanded, setExpanded] = useState(false);
        const toggleExpanded = () => {
            setExpanded(!expanded);
        }

        return (
            <div className="FolderItem">
                <ItemRow type="folder" isFolderExpanded={expanded} name={folderName} onClick={toggleExpanded} indentLevel={indentLevel} />
                {expanded &&
                    Object.entries(folderContents).map(p => treeItemToComponent(p, indentLevel + 1, onFileClick))
                }
            </div>
        );
    }