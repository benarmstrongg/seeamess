import React, { FC } from "react";
import './styles.scss';

export const Spinner: FC = () => (
    <div className="Spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
        <div className="overlay"></div>
    </div>
)