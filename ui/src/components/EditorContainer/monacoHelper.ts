import jscodeshift, { Collection } from 'jscodeshift';
// @ts-ignore
import MonacoJSXHighlighter from 'monaco-jsx-highlighter';
import { monaco as _monaco } from '@monaco-editor/react';
import { tsCompilerOptions } from './compilerOptions';
import { EditorInstance, Monaco, MonacoEditorOnChange, TSWorker, Uri } from '../../types/monaco';

export class MonacoHelper {
    private _codeParser = jscodeshift.withParser('tsx');
    core: Monaco = null as any;
    editorInstance: EditorInstance = null as any;
    tsWorker: TSWorker = null as any;
    get uri(): Uri {
        return this.core.Uri.file(this.filePath);
    };

    constructor(
        public projectDir: string,
        public projectFiles: { [filePath: string]: string },
        public filePath: string,
    ) { }

    init(initialValue: string, onChange: MonacoEditorOnChange) {
        this._initMonaco().then(async (_monaco) => {
            this.core = _monaco;
            this._setTsCompilerOptions();
            const ast = this.parseToAST(initialValue);
            if (ast) this._registerTsImports(ast);
            this.editorInstance = this._createEditorInstance(initialValue);
            this.tsWorker = await this._createTsWorkerInstance();
            this._registerJsxHighlighter();
            this._registerEditorOnChange(onChange);
            onChange(ast, this.editorInstance, this.tsWorker);
        });
    }

    parseToAST(text?: string): Collection | null {
        let ast: Collection | null = null;
        try {
            ast = this._codeParser(text || this.editorInstance!.getValue());
        }
        catch (e) { }
        return ast;
    }

    private async _initMonaco() {
        return await _monaco.init();
    }

    private _setTsCompilerOptions() {
        this.core.languages.typescript.typescriptDefaults.setCompilerOptions(tsCompilerOptions);
    }

    private _registerTsImports(ast: Collection) {
        const imports = ast.find(jscodeshift.ImportDeclaration);
        imports.forEach(_import => {
            const libraryName = _import.node.source.value || '';
            const globalTypeDefPath = `${this.projectDir}/node_modules/@types/${libraryName}/index.d.ts`;
            const libraryTypeDefPath = `${this.projectDir}/node_modules/${libraryName}/index.d.ts`;
            const declarationTsCode = this.projectFiles[globalTypeDefPath] || this.projectFiles[libraryTypeDefPath];
            if (libraryName && declarationTsCode) {
                this.core.languages.typescript.typescriptDefaults.addExtraLib(
                    `declare module '${libraryName}' { ${declarationTsCode} }`
                );
            }
        })
    }

    private _createEditorInstance(initialValue: string) {
        return this.core.editor.create(
            document.querySelector(`[data-filepath="${this.filePath}"]`)! as HTMLElement,
            {
                model: this.core.editor.createModel(initialValue, 'typescript', this.uri),
                theme: 'vs-light',
            }
        );
    }

    private async _createTsWorkerInstance() {
        const tsWorkerFactory = await this.core.languages.typescript.getTypeScriptWorker();
        return await tsWorkerFactory(this.uri);
    }

    private _registerJsxHighlighter() {
        const monacoJSXHighlighter = new MonacoJSXHighlighter(this.core, this._codeParser, this.editorInstance!);
        monacoJSXHighlighter.highLightOnDidChangeModelContent((ast) => ast, () => null, undefined, () => { });
    }

    private _registerEditorOnChange(onChange: MonacoEditorOnChange) {
        this.editorInstance.onDidChangeModelContent(() => {
            onChange(this.parseToAST(), this.editorInstance, this.tsWorker);
        })
    }
}

// typescript.typescriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: false,
//     noSyntaxValidation: false
// })