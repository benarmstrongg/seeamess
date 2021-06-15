import ts from "typescript";
import { AST, Identifier } from "ast";

export class PropertySignature extends AST implements ts.PropertySignature {
    _typeElementBrand;
    _declarationBrand;
    name: ts.PropertySignature['name'];
    initializer?: ts.PropertySignature['initializer'];
    type?: ts.PropertySignature['type'];
    kind: ts.PropertySignature['kind'];

    constructor(node: ts.PropertySignature) {
        super(node);
        this.name = node.name;
        this.initializer = node.initializer;
        this.type = node.type;
        this.kind = node.kind;
    }

    getTypeMembers(): AST[] {
        if (this.type && this.type['members']) {
            return (this.type['members'] as any[]).map(AST.from)
        }
        return [];
    }

    getName(): string {
        return AST.as(this.name as Identifier, Identifier).text;
    }
}