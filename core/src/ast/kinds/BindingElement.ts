import ts from "typescript";
import { ASTNode, BindingName } from "ast";

export class BindingElement extends ASTNode implements ts.BindingElement {
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
        return ASTNode.as(this.name, BindingName).getNames();
    }

    getNamesString(): string {
        return ASTNode.as(this.name, BindingName).getNamesString();
    }
}