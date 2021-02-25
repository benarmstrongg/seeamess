import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { MonacoHelper } from '../../code/monaco-helper';
import { TSHelper } from "../../code/ts-helper";
import { ReactComponentEditorView } from "../../../plugins/react/views/ComponentEditor";
import { ContentObjectMeta } from "../../../types/ContentObjectMeta";
import { IEditor } from "../../../types/editor";
import { MonacoEditorOnChange } from "../../../types/monaco";
import { Spinner } from "../../../components/Spinner";
import { CodeEditorView } from "../CodeEditor";
import { StatementEditor } from "../StatementEditor";
import { EditorToolbar } from "./EditorToolbar";
import './styles.scss';
import { useContent } from "../../../hooks/useContent";
import { useConfig } from "../../../hooks/useConfig";

interface EditorContainerProps {
    obj: ContentObjectMeta;
}

export const EditorContainer: FC<EditorContainerProps> = ({ obj }) => {
    const [activeEditor, setActiveEditor] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const config = useConfig();
    const { content: files, update } = useContent();
    const tsHelper = useMemo(() => new TSHelper(obj.containingFilePath, obj.text), [obj]);
    const monacoHelper = useMemo(() => new MonacoHelper(tsHelper, config, files.reduce((o, f) => ({ ...o, [f.objectName]: f }), {})), [tsHelper, config, files]);
    const handleChange = useCallback<MonacoEditorOnChange>((ast, e, t) => { }, []);


    useEffect(() => {
        if (!monacoHelper.editorInstance)
            monacoHelper.init(obj.text, handleChange).then(setIsReady);
    }, [monacoHelper, handleChange, obj])

    const setActiveEditorCallback = useCallback((index: number) => {
        setActiveEditor(index);
    }, [])

    const extraEditors = useMemo(() => [], []);
    const { buttons, components } = useMemo(() => parseEditors(extraEditors), [extraEditors])
    return (
        <div className="EditorContainer">
            {isReady === false && <Spinner />}
            <EditorToolbar
                buttons={[...buttons, CodeEditorView.button, StatementEditor.button]}
                setActiveEditor={setActiveEditorCallback}
                activeEditor={activeEditor}
            />
            {components.map((Editor, index) => (
                <div className="EditorView" key={Editor.name} hidden={activeEditor !== index}>
                    <Editor content={files.map(f => f.node)} update={update} />
                </div>
            ))}
            <div className="EditorView" hidden={activeEditor !== components.length && !!monacoHelper.editorInstance}>
                <CodeEditorView content={files.map(f => f.node)} update={update} />
            </div>
            <div className="EditorView" hidden={activeEditor !== components.length + 1}>
                <StatementEditor content={files.map(f => f.node)} update={update} />
            </div>
        </div>
    )
}

const parseEditors = (editors: IEditor[]) => {
    const components: IEditor[] = [];
    const buttons: ReactElement[] = [];
    editors.forEach(Editor => {
        components.push(Editor);
        buttons.push(Editor.button);
    });
    return { buttons, components };
}