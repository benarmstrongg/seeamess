import React from "react";
import { FC } from "react";
import './styles.scss';

export const OutputSection: FC = ({ children }) => {
    return (
        <div className="OutputSection">{children}</div>
    )
}