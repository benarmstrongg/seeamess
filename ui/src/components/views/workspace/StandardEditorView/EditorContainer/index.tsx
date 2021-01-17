import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { MonacoHelper } from "../../../../../code/monaco-helper";
import { ASTNode } from "../../../../../code/ts-ast-wrapper/ASTNode";
import { EditorContext, useSeeamess } from "../../../../../context";
import { IEditorView } from "../../../../../types/EditorView";
import { MonacoEditorOnChange } from "../../../../../types/monaco";
import { CodeEditorView } from "../CodeEditorView";
import { StatementEditorView } from "../StatementEditorView";
import { EditorToolbar } from "./EditorToolbar";

interface EditorContainerProps {
    initialValue: string;
    filePath: string;
}

export const EditorContainer: FC<EditorContainerProps> = ({ initialValue, filePath }) => {
    const [activeEditor, setActiveEditor] = useState(0);
    const [astSnapshot, setAstSnapshot] = useState<ASTNode>();
    const { state } = useSeeamess();
    const monacoHelper = useMemo(
        () => new MonacoHelper(state.config.projectDir, state.files, filePath),
        [state.config, state.files, filePath]
    );

    const handleChange = useCallback<MonacoEditorOnChange>((ast, e, t) => {
        if (ast)
            return setAstSnapshot((ast));
    }, []);

    useEffect(() => {
        if (!monacoHelper.editorInstance)
            monacoHelper.init(initialValue, handleChange);
    }, [monacoHelper, initialValue, handleChange])

    const setActiveEditorCallback = useCallback((index: number) => {
        setActiveEditor(index);
    }, [])

    const editors = useMemo(() => [CodeEditorView, StatementEditorView], []);
    const { buttons, components } = useMemo(() => parseEditors(editors), [editors])
    return (
        <div className="EditorContainer">
            <EditorContext.Provider
                value={{ initialValue, filePath: `file://${filePath}`, ast: astSnapshot as any, monaco: monacoHelper }}>
                <EditorToolbar buttons={buttons} setActiveEditor={setActiveEditorCallback} activeEditor={activeEditor} />
                {components.map((Editor, index) => (
                    <div key={Editor.name} hidden={activeEditor !== index}>
                        <Editor filePath={filePath} _initMonaco={null as any} editor={monacoHelper.editorInstance} ast={astSnapshot as any} />
                    </div>
                ))}
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