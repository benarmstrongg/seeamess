import React, { FC, useCallback, useEffect, useState } from "react";
import { JavascriptFile } from "../../internal/content-types/JavascriptFile";
import { useTunnel } from "../useTunnel";
import { FilesContext } from "./FilesContext";
import { IFilesContext as F } from './types';

export const FilesProvider: FC = ({ children }) => {
    const tunnel = useTunnel();
    const [files, setFiles] = useState<F['files']>();

    useEffect(() => {
        if (!tunnel) {
            return;
        }
        tunnel.on('setFiles', (files: any) => {
            const filesArr: JavascriptFile[] = [];
            Object.entries<string>(files).forEach(([path, text]) => {
                if (path.includes('node_modules')) {
                    return;
                }
                filesArr.push(JavascriptFile.create(path, text));
            })
            setFiles(filesArr);
        });
    }, [tunnel]);

    const update = useCallback<F['update']>((fileName, text) => {
        // TODO
        if (!files) {
            return;
        }
        const currentFileIndex = files.findIndex(f => f.containingFilePath === fileName);
        if (currentFileIndex === -1) {
            return;
        }
        // const currentFileObj = files[currentFileIndex];
        // files.splice(currentFileIndex, 1, { ...currentFileObj, text });
        setFiles(files);
    }, [files]);

    const save = useCallback<F['save']>(async (contentType, objectName) => {
        if (!tunnel) {
            return false;
        }
        // TODO
        return true;
    }, [tunnel]);

    if (!files)
        return (<div>Waiting for project files...</div>);

    return (
        <FilesContext.Provider
            value={{
                files,
                update,
                save
            }}
        >
            {children}
        </FilesContext.Provider>
    );
}