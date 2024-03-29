import ts from "typescript";
import { ast, AST, BindingName } from "../../ast";

export class BindingElement extends AST implements ts.BindingElement {
    _declarationBrand;
    name: ts.BindingElement['name'];
    parent: ts.BindingElement['parent'];
    kind: ts.BindingElement['kind'];
    dotDotDotToken?: ts.BindingElement['dotDotDotToken'];
    propertyName?: ts.BindingElement['propertyName'];
    initializer?: ts.BindingElement['initializer'];

    constructor(node: ts.BindingElement) {
        super(node);
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
        this.dotDotDotToken = node.dotDotDotToken;
        this.propertyName = node.propertyName;
        this.initializer = node.initializer;

    }

    getNames(): string[] {
        return ast(this.name).to(BindingName).getNames();
    }

    getNamesString(): string {
        return ast(this.name).to(BindingName).getNamesString();
    }
}