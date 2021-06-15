import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { MonacoHelper } from 'internal/code/monaco-helper';
import { TSHelper } from "internal/code/ts-helper";
import { ReactComponentEditor } from "plugins/react/editors/ComponentEditor/ReactComponentEditor";
import { IEditor } from "types/editor";
import { MonacoEditorOnChange } from "types/monaco";
import { Spinner } from "components";
import { CodeEditor, StatementEditor } from "internal/editors";
import { EditorToolbar } from ".";
import { useConfig, useEditor, useFiles } from "hooks";
import './styles.scss';
import { ContentType } from "types/ContentType";
import { AST } from "ast";

interface EditorContainerProps {
    obj: ContentType;
}

export const EditorContainer: FC<EditorContainerProps> = ({ obj }) => {
    const [activeEditor, setActiveEditor] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const config = useConfig();
    const { files } = useFiles();
    const tsHelper = useMemo(() => new TSHelper(obj.containingFilePath, obj.getText()), [obj]);
    const monacoHelper = useMemo(() => new MonacoHelper(tsHelper, config, files.reduce((o, f) => ({ ...o, [f.containingFilePath]: f }), {})), [tsHelper, config, files]);
    const handleChange = useCallback<MonacoEditorOnChange>((ast, e, t) => { }, []);
    const { content } = useEditor();


    useEffect(() => {
        if (!monacoHelper.editorInstance)
            monacoHelper.init(obj.getText(), handleChange).then(setIsReady);
    }, [monacoHelper, handleChange, obj])

    const setActiveEditorCallback = useCallback((index: number) => {
        setActiveEditor(index);
    }, [])

    const extraEditors: IEditor[] = [ReactComponentEditor];
    // const { buttons, components } = parseEditors(extraEditors);
    const buttons: IEditor['button'][] = [];
    const components: IEditor[] = [];
    extraEditors.forEach((Editor, index) => {
        let shouldRender = false;
        for (const c of Editor.acceptedContentTypes || []) {
            if (AST.is(content, c as any as typeof AST)) {
                shouldRender = true;
                break;
            }
            else if (content.find({}, c as any) !== undefined) {
                shouldRender = true;
                break;
            }
        }
        if (shouldRender) {
            buttons.push(Editor.button);
            components.push(Editor);
        }
    })
    return (
        <div className="EditorContainer">
            {isReady === false && <Spinner />}
            <EditorToolbar
                buttons={[...buttons, CodeEditor.button, StatementEditor.button]}
                setActiveEditor={setActiveEditorCallback}
                activeEditor={activeEditor}
            />
            {components.map((Editor, index) => {
                return (
                    <div className="EditorView" key={Editor.name} hidden={activeEditor !== index}>
                        <Editor />
                    </div>
                );
            })}
            <div className="EditorView" hidden={activeEditor !== components.length && !!monacoHelper.editorInstance}>
                <CodeEditor />
            </div>
            <div className="EditorView" hidden={activeEditor !== components.length + 1}>
                <StatementEditor />
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