// don't export from index.ts
import * as MonacoEditor from 'monaco-editor';
import { AST } from '../ast';

export type EditorInstance = MonacoEditor.editor.IStandaloneCodeEditor;

export type Monaco = typeof MonacoEditor;

export type TSCompilerOptions = MonacoEditor.languages.typescript.CompilerOptions;

export type TSWorker = MonacoEditor.languages.typescript.TypeScriptWorker;

export type Uri = MonacoEditor.Uri;

export type MonacoEditorOnChange = (ast: AST | null, editorInstance: EditorInstance, tsWorker: TSWorker) => any;