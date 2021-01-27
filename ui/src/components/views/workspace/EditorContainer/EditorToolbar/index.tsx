import React, { FC, ReactElement } from "react";
import './styles.scss';

interface EditorToolBarProps {
    buttons: ReactElement[];
    setActiveEditor: (index: number) => void;
    activeEditor: number;
}

export const EditorToolbar: FC<EditorToolBarProps> = ({ buttons, setActiveEditor, activeEditor }) => {
    return (
        <div className="EditorToolbar">
            {buttons.map((button, i) => (
                <span
                    key={'button' + i}
                    className={'button'.concat(activeEditor === i ? ' active' : '')}
                    onClick={() => setActiveEditor(i)}
                >
                    {button}
                </span>
            ))}
        </div>
    );
}