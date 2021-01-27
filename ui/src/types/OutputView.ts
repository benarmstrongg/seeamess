import { FC, ReactElement } from "react";

export interface OutputViewProps {
}


export interface IOutputView extends FC<OutputViewProps> {
    button: ReactElement;
}


export interface OutputViewState {
    updateOutput(...args: any): any;
}