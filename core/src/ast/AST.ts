import ts from "typescript";
import { SourceFile } from "ast";

export type ASTConstructor<A extends AST> = new (node: any) => A;
type ASTQuery<A extends AST> = Partial<AST & { type: ASTConstructor<A> }> | ((node: AST) => boolean);

type TypeOrQuery<A extends AST> = ASTConstructor<A> | ASTQuery<A>;

export class AST implements ts.Node {
    static program: ts.Program;

    //#region ts.Node props
    kind: ts.Node['kind'];
    flags: ts.Node['flags'];
    parent: ts.Node['parent'];
    pos: ts.Node['pos'];
    end: ts.Node['end'];
    getSourceFile: ts.Node['getSourceFile'];
    getChildAt: ts.Node['getChildAt'];
    getChildCount: ts.Node['getChildCount'];
    getChildren: ts.Node['getChildren'];
    getStart: ts.Node['getStart'];
    getFullStart: ts.Node['getFullStart'];
    getEnd: ts.Node['getEnd'];
    getFirstToken: ts.Node['getFirstToken'];
    getFullText: ts.Node['getFullText'];
    getWidth: ts.Node['getWidth'];
    getFullWidth: ts.Node['getFullWidth'];
    getLeadingTriviaWidth: ts.Node['getLeadingTriviaWidth'];
    getLastToken: ts.Node['getLastToken'];
    forEachChild: ts.Node['forEachChild'];
    //#endregion

    get key(): string {
        return `${this.containingFileName}-${this.kindString}-${this.pos}`;
    }
    get kindString(): string {
        return ts.SyntaxKind[this.kind].toString();
    }
    get sourceFile(): SourceFile {
        return ast(this.getSourceFile()).to(SourceFile);
    }
    get containingFilePath(): string {
        return this.sourceFile.fileName;
    }
    get containingFileName(): string {
        return this.sourceFile.baseName;
    }
    get program(): ts.Program {
        return AST.program;
    }
    private _typeChecker!: ts.TypeChecker;
    get typeChecker(): ts.TypeChecker {
        if (!this._typeChecker) {
            this._typeChecker = this.program.getTypeChecker();
        }
        return this._typeChecker;
    }
    get $type(): ts.Type | undefined {
        const symbol = this.typeChecker.getSymbolAtLocation(this);
        if (symbol) {
            return this.typeChecker.getTypeOfSymbolAtLocation(symbol, this);
        }
        return undefined;
    }

    constructor(node: ts.Node) {
        this.kind = node.kind;
        this.flags = node.flags;
        this.pos = node.pos;
        this.end = node.end;
        this.parent = node.parent;
        this.getChildAt = node.getChildAt;
        this.getChildCount = node.getChildCount;
        this.getChildren = node.getChildren;
        this.getSourceFile = node.getSourceFile;
        this.getStart = node.getStart;
        this.getFullStart = node.getFullStart;
        this.getEnd = node.getEnd;
        this.getFirstToken = node.getFirstToken;
        this.getFullText = node.getFullText;
        this.getWidth = node.getWidth;
        this.getFullWidth = node.getFullWidth;
        this.getLeadingTriviaWidth = node.getLeadingTriviaWidth;
        this.getLastToken = node.getLastToken;
        this.forEachChild = node.forEachChild;

        Object.assign(this, node);
    }

    // static si<A extends AST>(this: ASTConstructor<A>, node: AST): node is A { return !!node; }
    static si(this: ASTConstructor<any>, node: AST): node is AST {
        return node.is(this);
    }

    is<A extends AST>(nodeType: ASTConstructor<A>): this is A {
        const defaultConstructor = AST as ASTConstructor<AST>;
        if (nodeType === defaultConstructor) {
            return true;
        }
        if (!nodeType) {
            return false;
        }
        const kind = nodeType.name;
        if (!!kind && kind === this.kindString) {
            return true;
        }
        const si = nodeType['si'];
        if (!!si) {
            return si(this);
        }
        return false;
    }

    getText(): string {
        return this.sourceFile.text.substring(this.pos, this.end);
    }

    getChildNodes(): ts.Node[] {
        const nodes: ts.Node[] = [];
        this.forEachChild(node => {
            nodes.push(node);
        });
        return nodes;
    }

    find<A extends AST>(type: ASTConstructor<A>): A | undefined;
    find<A extends AST>(query: ASTQuery<A>): A | undefined;
    find<A extends AST>(typeOrQuery: TypeOrQuery<A>): A | AST | undefined {
        let result: A | AST | undefined;
        const setResult = (node: ts.Node) => {
            if (!!result) {
                return;
            }
            result = this.match(node, typeOrQuery);
        }
        this.forEachChild(setResult)
        if (!result) {
            const scanChildren = (node: ts.Node) => {
                if (!result) {
                    node.forEachChild(scanChildren);
                }
                setResult(node);
            }
            this.forEachChild(scanChildren)
        }
        return result;
    }

    filter<A extends AST>(type: ASTConstructor<A>): A[];
    filter<A extends AST>(query: ASTQuery<A>): A[];
    filter<A extends AST>(typeOrQuery: TypeOrQuery<A>): A[] {
        const results: A[] = [];
        const setResult = (node: ts.Node) => {
            const result = this.match(node, typeOrQuery);
            if (result) {
                results.push(result as A);
            }
            node.forEachChild(setResult);
        }
        this.forEachChild(setResult)
        return results;
    }

    private match<A extends AST>(node: ts.Node, typeOrQuery: TypeOrQuery<A>): A | AST | undefined {
        const $node = ast(node);
        function isASTConstructor(a: any): a is ASTConstructor<A> {
            return !!a['si'];
        }
        if (isASTConstructor(typeOrQuery)) {
            if ($node.is(typeOrQuery)) {
                return $node.to(typeOrQuery);
            }
        }
        else if (typeof typeOrQuery === 'function') {
            if (typeOrQuery($node)) {
                return $node;
            }
        }
        else {
            let isMatch = true;
            for (let p in node) {
                if (node[p] !== typeOrQuery[p]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                if (typeOrQuery.type) {
                    return $node.to(typeOrQuery.type);
                }
                else {
                    return $node;
                }
            }
        }
        return undefined;
    }

    to<A extends AST>(contentType: ASTConstructor<A>): A {
        return new contentType(this);
    }
}

export const ast = (node: ts.Node): AST => {
    return new AST(node);
}