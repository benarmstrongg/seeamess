import React, { FC } from "react";
import { calcIndentMargin } from "../util";
import { FaFolder, FaFile, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import './styles.scss';

export const ItemRow: FC<{ type: 'folder' | 'file', name: string, indentLevel: number, onClick?: any, isFolderExpanded?: boolean }> =
    ({ type, name, indentLevel, onClick, isFolderExpanded }) => (
        <div className="ItemRow" style={{ paddingLeft: calcIndentMargin(indentLevel) }} onClick={onClick}>
            <div className="overlay"></div>
            {type === 'folder' ?
                <>
                    {isFolderExpanded ? <FaCaretDown /> : <FaCaretUp />}
                    <FaFolder />
                </> :
                <FaFile />
            }
            <>&nbsp;</>
            <span>{type === 'folder' ? '/' : ''}{name}</span>
        </div>
    )