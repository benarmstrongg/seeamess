import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { MonacoHelper } from '../../../../code/monaco-helper';
import { TSHelper } from "../../../../code/ts-helper";
import { EditorContext, useSeeamess } from "../../../../context";
import { ReactComponentEditorView } from "../../../../plugins/react/views/ComponentEditor";
import { ContentObject } from "../../../../types/ContentObject";
import { IEditorView } from "../../../../types/EditorView";
import { MonacoEditorOnChange } from "../../../../types/monaco";
import { Spinner } from "../../../common/Spinner";
import { CodeEditorView } from "../CodeEditorView";
import { StatementEditorView } from "../StatementEditorView";
import { EditorToolbar } from "./EditorToolbar";
import './styles.scss';

interface EditorContainerProps {
    obj: ContentObject;
}

export const EditorContainer: FC<EditorContainerProps> = ({ obj }) => {
    const [activeEditor, setActiveEditor] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const { config, content } = useSeeamess();
    const tsHelper = useMemo(() => new TSHelper(obj.containingFilePath, obj.initialValue), [obj]);
    const monacoHelper = useMemo(() => new MonacoHelper(tsHelper, config, content.files), [tsHelper, config, content.files]);
    const handleChange = useCallback<MonacoEditorOnChange>((ast, e, t) => { }, []);

    useEffect(() => {
        if (!monacoHelper.editorInstance)
            monacoHelper.init(obj.initialValue, handleChange).then(setIsReady);
    }, [monacoHelper, handleChange, obj])

    const setActiveEditorCallback = useCallback((index: number) => {
        setActiveEditor(index);
    }, [])

    const extraEditors = useMemo(() => [ReactComponentEditorView], []);
    const { buttons, components } = useMemo(() => parseEditors(extraEditors), [extraEditors])
    return (
        <div className="EditorContainer">
            {isReady === false && <Spinner />}
            <EditorContext.Provider
                value={{ initialValue: obj.initialValue, filePath: obj.containingFilePath, monaco: monacoHelper, tsHelper }}>
                <EditorToolbar
                    buttons={[...buttons, CodeEditorView.button, StatementEditorView.button]}
                    setActiveEditor={setActiveEditorCallback}
                    activeEditor={activeEditor}
                />
                {components.map((Editor, index) => (
                    <div className="EditorView" key={Editor.name} hidden={activeEditor !== index}>
                        <Editor />
                    </div>
                ))}
                <div className="EditorView" hidden={activeEditor !== components.length && !!monacoHelper.editorInstance}>
                    <CodeEditorView />
                </div>
                <div className="EditorView" hidden={activeEditor !== components.length + 1}>
                    <StatementEditorView />
                </div>
            </EditorContext.Provider>
        </div>
    )
}

const parseEditors = (editors: IEditorView[]) => {
    const components: IEditorView[] = [];
    const buttons: ReactElement[] = [];
    editors.forEach(Editor => {
        components.push(Editor);
        buttons.push(Editor.button);
    });
    return { buttons, components };
}