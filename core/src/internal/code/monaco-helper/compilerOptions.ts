import { JsxEmit, ModuleKind, ModuleResolutionKind, ScriptTarget } from "typescript";
import { TSCompilerOptions } from "types/monaco";

export const tsCompilerOptions: TSCompilerOptions = {
    target: ScriptTarget.ES2016,
    allowNonTsExtensions: true,
    moduleResolution: ModuleResolutionKind.NodeJs,
    module: ModuleKind.ES2015 as any,
    noEmit: true,
    typeRoots: ["node_modules/@types"],
    paths: {},
    reactNamespace: 'React',
    jsx: JsxEmit.React,
    jsxFactory: 'React.createElement',
    //@ts-ignore
    jsxFragmentFactory: 'React.Fragment',
    allowSyntheticDefaultImports: true
    // baseUrl: projectDir
}
