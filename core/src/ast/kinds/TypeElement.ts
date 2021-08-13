import ts from "typescript";
import { AST } from "..";

export class TypeElement extends AST implements ts.TypeElement {
    _declarationBrand;
    _typeElementBrand;
    questionToken?: ts.TypeElement['questionToken'];
    name?: ts.TypeElement['name'];

    constructor(node: ts.TypeElement) {
        super(node);
        this.questionToken = node.questionToken;
        this.name = node.name;
    }
}