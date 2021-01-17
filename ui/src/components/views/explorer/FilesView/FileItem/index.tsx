import React, { FC } from "react";
import { ItemRow } from "../ItemRow";

export const FileItem: FC<{ fileName: string, indentLevel?: number, path: string, onClick: (filePath: string) => void }> =
    ({ fileName, indentLevel = 0, onClick, path }) => (
        <div className="FileItem">
            <ItemRow type="file" name={fileName} onClick={() => onClick(path)} indentLevel={indentLevel} />
        </div>
    )