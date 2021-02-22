import React, { FC, ReactElement } from "react";
import { EditorButton } from "../../../../common/EditorButton";
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
                <EditorButton
                    key={'button' + i}
                    active={activeEditor === i}
                    onClick={() => setActiveEditor(i)}
                >
                    {button}
                </EditorButton>
            ))}
        </div>
    );
}