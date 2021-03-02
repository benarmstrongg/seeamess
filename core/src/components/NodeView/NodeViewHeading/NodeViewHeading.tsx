import React, { FC } from "react";

interface NodeViewHeadingProps {
    text: string;
}

export const NodeViewHeading: FC<NodeViewHeadingProps> = ({ text }) => (
    text !== '' ? (
        <>
            <h5 className="NodeViewHeading">{text}</h5>
            <>&nbsp;&nbsp;</>
        </>
    ) : <></>
)