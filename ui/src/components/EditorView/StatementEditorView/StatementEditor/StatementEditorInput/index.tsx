import React, { ChangeEvent, FC, KeyboardEvent, SyntheticEvent, useState } from "react";
import ts from "typescript";
// import ts from "typescript";
import { useEditor } from "../../../../../context";
import { useCursorCorrector } from "./useCursorCorrector";

interface StatementEditorInputProps {
    placeholder?: string;
    value: string;
    node: ts.Node;
}

interface InputSelection {
    start: number;
    end: number;
    size: number;
}

// const extraCursorOffsets: { [key in keyof typeof ts.SyntaxKind]?: number } = {
//     'AbstractKeyword': 1,
//     'StringLiteral': 2
// };



export const StatementEditorInput: FC<StatementEditorInputProps> = ({ placeholder, value, node }) => {
    const [trackedValue, setTrackedValue] = useState(value);
    const [cursorPosition/*,setCursorPosition*/] = useState(0);
    const [cursorSelection/*,setCursorSelection*/] = useState<InputSelection>();
    const correctCursor = useCursorCorrector();
    const { monaco } = useEditor();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let diff = event.target.value.substr(cursorPosition, 1);
        if (cursorSelection) {
            deleteLeft();
            diff = event.target.value.substr(cursorSelection.start, 1);
        }
        insertText(diff);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace') {
            if (cursorPosition !== 0) {
                deleteLeft();
                correctCursor(event, (ev) => {
                    const elem = ev.target as HTMLInputElement;
                    const newPosition = cursorPosition - (cursorSelection?.size || 1);
                    elem.selectionStart = newPosition;
                    elem.selectionEnd = newPosition;
                });
            }
            event.preventDefault();
        }
    }

    const handleSelect = (event: SyntheticEvent<HTMLInputElement>) => {
        // const { selectionStart, selectionEnd } = event.currentTarget;
        // if (!node.loc || selectionStart === null || selectionEnd === null)
        //     return;
        // const selectionSize = selectionEnd - selectionStart;
        // const lineNumber = node.loc.start.line;
        // let column = node.loc.start.column;
        // // if (node.type in extraCursorOffsets)
        // //     column += extraCursorOffsets[node.kind as any];
        // if (selectionStart !== selectionEnd) {
        //     const startPos = { lineNumber, column: column + selectionStart, size: selectionSize };
        //     const endPos = { lineNumber, column: column + selectionStart + selectionSize };
        //     monaco.editorInstance.setPosition({ column: column + selectionEnd, lineNumber });
        //     monaco.editorInstance.setSelection(monaco.core.Selection.fromPositions(startPos, endPos));
        //     setCursorSelection({ start: selectionStart, end: selectionEnd, size: selectionSize });
        //     setCursorPosition(selectionEnd);
        // }
        // else {
        //     const pos = selectionEnd;
        //     monaco.editorInstance.setPosition({ column: column + pos, lineNumber });
        //     setCursorSelection(undefined);
        //     setCursorPosition(pos);
        // }
    }

    const deleteLeft = () => {
        monaco.editorInstance.trigger('keyboard', 'deleteLeft', {});
        const newValue = cursorSelection ?
            value.substring(0, cursorSelection.start).concat(value.substring(cursorSelection.end + 1)) :
            value.substring(0, cursorPosition - 1).concat(value.substring(cursorPosition));
        console.log(cursorSelection);
        setTrackedValue(newValue);
    }

    const insertText = (text: string) => {
        monaco.editorInstance.trigger('keyboard', 'type', { text });
        const newValue = value.substring(0, cursorPosition).concat(text, value.substring(cursorPosition));
        setTrackedValue(newValue);
    }

    return (
        <input
            className="StatementEditorInput"
            placeholder={placeholder || ''}
            value={trackedValue === '' ? trackedValue : value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onSelect={handleSelect}
        />
    )
}


        // const cursorPos = monaco.editorInstance.getPosition()!;
        // const posOffset = monaco.editorInstance.getModel()?.getOffsetAt(cursorPos) || 0;
        // monaco.tsWorker.getCompletionsAtPosition(filePath, posOffset).then(console.log);
        // monaco.tsWorker.getDefinitionAtPosition(filePath, posOffset).then(console.log);
        // monaco.tsWorker.getQuickInfoAtPosition(filePath, posOffset).then(console.log);
        // monaco.editorInstance.getModel()?.setValue(initialValue)
        // monaco.tsWorker.findRenameLocations(filePath, posOffset, false, false, false).then(console.log);