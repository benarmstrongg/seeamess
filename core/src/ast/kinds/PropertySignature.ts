import ts from "typescript";
import { ASTNode, Identifier } from "ast";

export class PropertySignature extends ASTNode implements ts.PropertySignature {
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

    getTypeMembers(): ASTNode[] {
        if (this.type && this.type['members']) {
            return (this.type['members'] as any[]).map(ASTNode.from)
        }
        return [];
    }

    getName(): string {
        return ASTNode.as(this.name as Identifier, Identifier).text;
    }
}