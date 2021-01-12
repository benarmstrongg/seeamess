import React, { FC } from "react";

interface StatementEditorTitleProps {
    text: string;
}

export const StatementEditorTitle: FC<StatementEditorTitleProps> = ({ text }) => (
    text !== '' ? (
        <>
            <h5 className="StatementEditorTitle">{text}</h5>
            <>&nbsp;&nbsp;</>
        </>
    ) : <></>
)