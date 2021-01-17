import ts from "typescript";

type ASTQuery<T> = Partial<T> | ((node: ts.Node) => T | T[] | undefined)

export type ConstructorOf<T> = new (...args: any[]) => T;


export class ASTNode implements ts.Node {
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
    getText: ts.Node['getText'];
    getFullText: ts.Node['getFullText'];
    getWidth: ts.Node['getWidth'];
    getFullWidth: ts.Node['getFullWidth'];
    getLeadingTriviaWidth: ts.Node['getLeadingTriviaWidth'];
    getLastToken: ts.Node['getLastToken'];
    forEachChild: ts.Node['forEachChild'];
    //#endregion

    get childNodes(): ts.Node[] {
        return this.getChildren();
    }
    get key(): string {
        return `${this.kindString}${this.pos}`;
    }
    get kindString(): string {
        return ts.SyntaxKind[this.kind].toString();
    }
    get sourceFile(): SourceFile {
        return ASTNode.fromNode(this.getSourceFile(), SourceFile);
    }

    constructor(node: ts.Node) {
        this.kind = node.kind;
        this.flags = node.flags;
        this.parent = node.parent;
        this.pos = node.pos;
        this.end = node.end;
        this.getChildAt = node.getChildAt;
        this.getChildCount = node.getChildCount;
        this.getChildren = node.getChildren;
        this.getSourceFile = node.getSourceFile;
        this.getStart = node.getStart;
        this.getFullStart = node.getFullStart;
        this.getEnd = node.getEnd;
        this.getFirstToken = node.getFirstToken;
        this.getText = node.getText;
        this.getFullText = node.getFullText;
        this.getWidth = node.getWidth;
        this.getFullWidth = node.getFullWidth;
        this.getLeadingTriviaWidth = node.getLeadingTriviaWidth;
        this.getLastToken = node.getLastToken;
        this.forEachChild = node.forEachChild;
        Object.assign(this, node);
    }

    find<T extends ASTNode>(kind: ConstructorOf<T>, query?: ASTQuery<T>): T | undefined;
    find<T extends ASTNode>(kind: [ConstructorOf<T>], query?: ASTQuery<T>): T[];
    find<T extends ASTNode>(kind: ConstructorOf<T> | [ConstructorOf<T>], query?: ASTQuery<T>): T | T[] | undefined {
        let result: T | T[] | undefined = undefined;
        const multi = Array.isArray(kind) === true;
        const Kind = multi ? kind[0] : kind;
        const visitNode = (node: ts.Node) => {
            if (!multi && result !== undefined) {
                return;
            }
            if (ASTNode.is(node, Kind)) {
                let isMatch = true;
                if (query) {
                    isMatch = ASTNode.isMatch(node, query);
                }
                if (isMatch === true) {
                    if (multi === true) {
                        (result as T[]).push(ASTNode.fromNode(node, Kind));
                    }
                    else {
                        result = ASTNode.fromNode(node) as T;
                    }
                }
            }
            node.forEachChild(visitNode);
        }
        const topLevelMatch = multi === true ?
            (query ?
                this.childNodes.filter(child => ASTNode.isMatch(child, query)) :
                this.childNodes.filter(child => ASTNode.is(child, Kind))
            ).map((n) => ASTNode.fromNode(n, Kind)) :
            (query ?
                this.childNodes.find(child => ASTNode.isMatch(child, query)) :
                this.childNodes.find(child => ASTNode.is(child, Kind))
            );
        if (multi === true && (topLevelMatch as T[]).length > 0) {
            return topLevelMatch as T[];
        }
        if (multi === false && topLevelMatch !== undefined) {
            return ASTNode.fromNode(topLevelMatch as ts.Node, Kind) as T;
        }
        this.forEachChild(visitNode);
        return result;
    }

    static is<T extends ASTNode>(node: any, kind: new (...args: any[]) => T): node is T {
        return node instanceof kind;
    }

    static isMatch<T extends ts.Node>(node: T, query: ASTQuery<T>): boolean {
        let isMatch = true;
        Object.entries(query).forEach(([key, val]) => {
            if (isMatch === false) return;
            if (node[key] !== val) isMatch = false;
        });
        return isMatch;
    }

    static fromNode(node: ts.Node): ASTNode;
    static fromNode<T extends ASTNode>(node: ts.Node, kind: ConstructorOf<T>): T;
    static fromNode<T extends ASTNode>(node: ts.Node, kind?: ConstructorOf<T>): T | ASTNode {
        return kind !== undefined && typeof (kind) === 'function' ? new kind(node) : new ASTNode(node);
    }
}


export class SourceFile extends ASTNode implements ts.SourceFile {
    statements: ts.SourceFile['statements'];
    endOfFileToken: ts.SourceFile['endOfFileToken'];
    fileName: ts.SourceFile['fileName'];
    text: ts.SourceFile['text'];
    amdDependencies: ts.SourceFile['amdDependencies'];
    referencedFiles: ts.SourceFile['referencedFiles'];
    typeReferenceDirectives: ts.SourceFile['typeReferenceDirectives'];
    libReferenceDirectives: ts.SourceFile['libReferenceDirectives'];
    languageVariant: ts.SourceFile['languageVariant'];
    isDeclarationFile: ts.SourceFile['isDeclarationFile'];
    hasNoDefaultLib: ts.SourceFile['hasNoDefaultLib'];
    languageVersion: ts.SourceFile['languageVersion'];
    getLineAndCharacterOfPosition: ts.SourceFile['getLineAndCharacterOfPosition'];
    getLineEndOfPosition: ts.SourceFile['getLineEndOfPosition'];
    getPositionOfLineAndCharacter: ts.SourceFile['getPositionOfLineAndCharacter'];
    getLineStarts: ts.SourceFile['getLineStarts'];
    update: ts.SourceFile['update'];
    _declarationBrand: ts.SourceFile['_declarationBrand'];
    kind: ts.SourceFile['kind'];
    get sourceFile() {
        return this;
    }

    constructor(node: ts.SourceFile) {
        super(node);
        this.statements = node.statements;
        this.endOfFileToken = node.endOfFileToken;
        this.fileName = node.fileName;
        this.text = node.text;
        this.amdDependencies = node.amdDependencies;
        this.referencedFiles = node.referencedFiles;
        this.typeReferenceDirectives = node.typeReferenceDirectives;
        this.libReferenceDirectives = node.libReferenceDirectives
        this.languageVariant = node.languageVariant;
        this.isDeclarationFile = node.isDeclarationFile;
        this.hasNoDefaultLib = node.hasNoDefaultLib;
        this.languageVersion = node.languageVersion;
        this.getLineAndCharacterOfPosition = node.getLineAndCharacterOfPosition;
        this.getLineEndOfPosition = node.getLineEndOfPosition;
        this.getPositionOfLineAndCharacter = node.getPositionOfLineAndCharacter;
        this.getLineStarts = node.getLineStarts;
        this.update = node.update;
        this._declarationBrand = node._declarationBrand;
        this.kind = node.kind;
    }
}