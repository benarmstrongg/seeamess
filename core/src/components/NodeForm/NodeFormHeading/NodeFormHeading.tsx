import React, { FC } from "react";

interface NodeFormHeadingProps {
    text: string;
}

export const NodeFormHeading: FC<NodeFormHeadingProps> = ({ text }) => (
    text !== '' ? (
        <>
            <h5 className="NodeFormHeading">{text}</h5>
            <>&nbsp;&nbsp;</>
        </>
    ) : <></>
)