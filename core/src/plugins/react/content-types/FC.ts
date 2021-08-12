import { ast, AST, JsxOpeningElement, JsxElement, FunctionDeclaration, ParameterDeclaration, ObjectBindingPattern, Identifier, BindingElement } from "ast";
import ts from "typescript";

export class ReactFunctionComponent extends FunctionDeclaration {
    static si(node: AST): node is ReactFunctionComponent {
        if (!node.is(FunctionDeclaration)) {
            return false;
        }
        const fn = node.to(FunctionDeclaration);
        const firstCharacter = fn.getName()?.[0] || '';
        if (firstCharacter === firstCharacter.toLowerCase()) {
            return false;
        }
        if (fn.parameters.length > 1) {
            return false;
        }
        const returnStatement = fn.returnStatement;
        if (!(returnStatement?.find(JsxOpeningElement) || returnStatement?.find(JsxElement))) {
            return false;
        }
        return true;
    }

    props?: Props;

    constructor(node: AST) {
        const fn = node.to(FunctionDeclaration);
        super(fn);
        if (!!fn.parameters && fn.parameters[0]) {
            this.props = new Props(fn.parameters[0]);
        }
    }
}

class Props extends ParameterDeclaration {
    static si(node: AST): node is Props {
        if (!node.is(ParameterDeclaration)) {
            return false;
        }
        const param = node.to(ParameterDeclaration);
        const bindingElement = ast(param.name);
        if (!bindingElement.is(ObjectBindingPattern) && !bindingElement.is(Identifier)) {
            return false;
        }
        return true;
    }

    private _props: Prop[] = [];

    constructor(node: ts.ParameterDeclaration) {
        super(node);
        const binding = ast(ast(node).to(ParameterDeclaration).name);
        if (binding.is(ObjectBindingPattern)) {
            const objBinding = binding.to(ObjectBindingPattern);
            this._props = objBinding.elements.map(elem => new Prop(elem));
        }
    }

    get array() {
        return this._props;
    }

    [Symbol.iterator]() {
        return this._props.values();
    }
}

class Prop extends BindingElement {
    getName() {
        return this.name.getFullText();
    }

    getDefaultValue() {
        return this.initializer && ast(this.initializer);
    }
}



// type ReactComponentNode = ts.FunctionDeclaration | ts.ArrowFunction | ts.ClassDeclaration;

// type ReactFunctionComponentNode = ts.FunctionDeclaration | ts.VariableDeclaration;

// interface ReactComponentBase {
//     componentName: string;
//     props: Prop[];
//     state?: undefined;
//     memos?: undefined;
//     sideEffects?: undefined;
//     refs?: undefined;
//     render?: undefined;

//     _getName(): string;
//     _getProps(): Prop[];
// }

// export class ReactComponent extends ContentType implements ReactComponentBase {
//     props: Prop[];
//     componentName: string;
//     _componentNode: ReactFunctionComponent | ReactClassComponent | undefined;

//     constructor(node: ReactComponentNode) {
//         super(node);
//         this._componentNode = this._findComponent();
//         this.componentName = this._getName();
//         this.props = this._getProps();

//     }

//     private _findComponent(): ReactFunctionComponent | ReactClassComponent | undefined {
//         const parentNode = AST.from(this.parent);
//         if (!parentNode) {
//             return undefined;
//         }
//         return parentNode.find({}, ReactFunctionComponent) || parentNode.find({}, ReactClassComponent);
//     }

//     is() {
//         return !!this._componentNode;
//     }

//     _getName(): string {
//         if (this._componentNode === undefined) {
//             return '';
//         }
//         return this._componentNode._getName();
//     }

//     _getProps(): Prop[] {
//         if (this._componentNode === undefined) {
//             return [];
//         }
//         return this._componentNode._getProps();
//     }
// }

// class ReactFunctionComponentoooo extends ContentType implements ReactComponentBase {
//     props: Prop[];
//     componentName: string;
//     functionNode: ts.FunctionDeclaration | ts.ArrowFunction;

//     constructor(node: ReactFunctionComponentNode) {
//         super(node);
//         if (ts.isFunctionDeclaration(node)) {
//             this.functionNode = node;
//             this.componentName = this._getName();
//         }
//         else if (ts.isVariableDeclaration(node)) {
//             this.functionNode = this._getFunctionFromVariableDeclaration(node);
//             this.componentName = this._getNameFromVariableDeclaration(node);
//         }
//         else {
//             this.componentName = '';
//             this.functionNode = null as any;
//         }
//         this.props = this._getProps();
//     }

//     is() {
//         const nameFirstChar = this.componentName[0];
//         const correctNamingPattern = !(nameFirstChar.toLowerCase() === nameFirstChar);
//         if (correctNamingPattern === false) {
//             return false;
//         }
//         const numParams = this.functionNode?.parameters.length;
//         const correctNumParams = !numParams || numParams === 1;
//         if (correctNumParams === false) {
//             return false;
//         }
//         const returnStatement = this.find({}, ReturnStatement);
//         const correctReturnType = !!(returnStatement?.find({}, JsxOpeningElement) || returnStatement?.find({}, JsxElement));
//         if (correctReturnType === false) {
//             return false;
//         }
//         return true;
//     }

//     getPreview(): { code: string, defaultProps: { [prop: string]: any } } {
//         const code = this.getText();
//         if (this.functionNode.parameters.length === 0) {
//             return { code, defaultProps: {} };
//         }
//         const parameterDeclaration = AST.as(this.functionNode.parameters[0], ParameterDeclaration);
//         const props = new Props(parameterDeclaration.name);
//         const defaultProps = {};
//         props.getProps().forEach(prop => {
//             if (prop.defaultValue !== undefined) {
//                 defaultProps[prop.propName] = prop.defaultValue;
//             }
//         });
//         const codeWithoutParam = code.replace(parameterDeclaration.getText(), '');
//         let transpiledCode = ts.transpile(codeWithoutParam, {
//             noImplicitUseStrict: true,
//             target: ts.ScriptTarget.ES2015,
//             jsx: ts.JsxEmit.React
//         }).replace('export ', '');
//         return { code: transpiledCode, defaultProps };
//     }

//     _getFunctionFromVariableDeclaration(node: ts.VariableDeclaration): ts.ArrowFunction {
//         return node.initializer ? AST.as(node.initializer as any, ArrowFunction) :
//             ts.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, ts.factory.createBlock([]));
//     }

//     _getNameFromVariableDeclaration(node: ts.VariableDeclaration): string {
//         if (!ts.isIdentifier(node.name)) {
//             return 'Noname';
//         }
//         return node.name.text;
//     }

//     _getName(): string {
//         if (!this.functionNode.name) {
//             return 'Noname';
//         }
//         return this.functionNode.name.text;
//     }

//     _getProps(): Prop[] {
//         const propsBinding = this.functionNode.parameters?.[0]?.name;
//         if (!propsBinding) {
//             return [];
//         }
//         return new Props(propsBinding).getProps();
//     }
// }

// class Props extends BindingName {
//     _props: Prop[];

//     constructor(node: ts.BindingName) {
//         super(node);
//         this._props = this.getProps();
//     }

//     getProps(): Prop[] {
//         // const props: Prop[] = [];
//         if (ts.isIdentifier(this)) {
//             return [new Prop(this)];
//         }
//         else if (ts.isObjectBindingPattern(this)) {
//             return this.elements.map(e => new Props(e.name).getProps()).flat();
//         }
//         return [];
//     }

//     [Symbol.iterator]() {
//         return this._props;
//     }
// }

// class Prop extends AST {
//     propName: string;
//     defaultValue: any;

//     constructor(node: ts.Identifier | ts.ObjectBindingPattern) {
//         super(node);
//         this.propName = this._getName();
//         this.defaultValue = this._getDefaultValue();
//     }

//     private _getName(): string {
//         if (ts.isIdentifier(this)) {
//             return this.escapedText.toString();
//         }
//         if (ts.isObjectBindingPattern(this)) {


//         }
//         return '';
//     }

//     private _getDefaultValue(): any {
//         let defaultValue: any;
//         if (ts.isParameter(this.parent) || ts.isBindingElement(this.parent)) {
//             if (this.parent.initializer) {
//                 if (ts.isStringLiteral(this.parent.initializer)) {
//                     defaultValue = this.parent.initializer.text;
//                 }
//                 else if (ts.isNumericLiteral(this.parent.initializer)) {
//                     defaultValue = parseInt(this.parent.initializer.text);
//                 }
//                 else console.log(ts.SyntaxKind[this.parent.initializer.kind]);
//             }

//         }
//         return defaultValue;
//     }
// }

// export class ReactClassComponent extends ReactComponent {
//     is() { return true; }
//     _getName() { return ''; }
//     _getProps() { return [] };
// }
