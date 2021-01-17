import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class ExportAssignment extends ASTNode implements ts.ExportAssignment {
    _declarationBrand;
    _statementBrand;
    expression: ts.ExportAssignment['expression'];
    isExportEquals?: ts.ExportAssignment['isExportEquals'];
    name?: ts.ExportAssignment['name'];
    kind: ts.ExportAssignment['kind'];
    parent: ts.ExportAssignment['parent'];

    constructor(node: ts.ExportAssignment) {
        super(node);
        this.expression = node.expression;
        this.isExportEquals = node.isExportEquals;
        this.name = node.name;
        this.kind = node.kind;
        this.parent = node.parent;
    }

    get isDefaultExport(): boolean {
        return this.isExportEquals !== true;
    }

    getExpressionText(): string {
        if (ts.isIdentifier(this.expression)) {
            return this.expression.text;
        }
        return '';
    }

}