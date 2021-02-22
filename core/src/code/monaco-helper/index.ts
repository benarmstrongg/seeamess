// @ts-ignore
// import MonacoJSXHighlighter from 'monaco-jsx-highlighter';
// import jscodeshift from 'jscodeshift';
import { monaco as _monaco } from '@monaco-editor/react';
import { tsCompilerOptions } from './compilerOptions';
import { EditorInstance, Monaco, MonacoEditorOnChange, TSWorker, Uri } from '../../types/monaco';
import { ASTNode } from '../ts-ast-wrapper/ASTNode';
import { ImportDeclaration } from '../ts-ast-wrapper/kinds/ImportDeclaration';
import { TSHelper } from '../ts-helper';
import { SeeamessConfig } from '../../types';
import { ContentObject } from '../../types/ContentObject';

export class MonacoHelper {
    filePath: string;
    core: Monaco = null as any;
    editorInstance: EditorInstance = null as any;
    tsWorker: TSWorker = null as any;
    get uri(): Uri {
        return this.core.Uri.file(`file://${this.filePath}`);
    };

    constructor(public tsHelper: TSHelper, public config: SeeamessConfig, public files: { [name: string]: ContentObject }) {
        this.filePath = tsHelper.filePath;
    }

    init(initialValue: string, onChange: MonacoEditorOnChange) {
        return this._initMonaco().then(async (_monaco) => {
            this.core = _monaco;
            this._setTsCompilerOptions();
            const ast = this.tsHelper.getAST();
            this._registerTsImports(ast);
            this.editorInstance = this._createEditorInstance(initialValue);
            this.tsWorker = await this._createTsWorkerInstance();
            // this._registerJsxHighlighter();
            this._registerEditorOnChange(onChange);
            onChange(ast, this.editorInstance, this.tsWorker);
            return true;
        });
    }

    private async _initMonaco() {
        return await _monaco.init();
    }

    private _setTsCompilerOptions() {
        this.core.languages.typescript.typescriptDefaults.setCompilerOptions(tsCompilerOptions);
    }

    private _registerTsImports(ast: ASTNode) {
        const imports = ast.find({}, [ImportDeclaration]);
        const { projectDir } = this.config;
        imports.forEach(_import => {
            const libraryName = _import.getModuleName();
            const globalTypeDefPath = `${projectDir}/node_modules/@types/${libraryName}/index.d.ts`;
            const libraryTypeDefPath = `${projectDir}/node_modules/${libraryName}/index.d.ts`;
            const declarationTsCode = this.files[globalTypeDefPath]?.initialValue || this.files[libraryTypeDefPath]?.initialValue;
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
        // const monacoJSXHighlighter = new MonacoJSXHighlighter(this.core, this._codeParser, this.editorInstance!);
        // monacoJSXHighlighter.highLightOnDidChangeModelContent((ast) => ast, () => null, undefined, () => { });
    }

    private _registerEditorOnChange(onChange: MonacoEditorOnChange) {
        this.editorInstance.onDidChangeModelContent((e) => {
            onChange(this.tsHelper.getAST(), this.editorInstance, this.tsWorker);
        })
    }
}

// typescript.typescriptDefaults.setDiagnosticsOptions({
//     noSemanticValidation: false,
//     noSyntaxValidation: false
// })