import ts from "typescript";
import { SourceFile } from ".";

// add this to support ContentType class. If query is passed, kind should be able to be specified
// export type ASTQuery<T extends typeof ASTNode = typeof ASTNode> = Partial<InstanceType<T> & { nodeKind: T }> | ((node: ts.Node) => boolean)
export type ASTQuery<T extends typeof ASTNode = typeof ASTNode> = Partial<InstanceType<T>> | ((node: ts.Node) => boolean)

export type ConstructorOf<T extends new (...args: any) => any> = new (...args: ConstructorParameters<T>) => InstanceType<T>;

export type TsNodeOf<T extends typeof ASTNode> = ConstructorParameters<ConstructorOf<T>>[0];

export class ASTNode {
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
        return `${this.kindString}${this.pos}`;
    }
    get kindString(): string {
        return ts.SyntaxKind[this.kind].toString();
    }
    get sourceFile(): SourceFile {
        return ASTNode.as(this.getSourceFile(), SourceFile);
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
        // this.parent = node.parent || this.sourceFile;
        Object.assign(this, node);
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

    node<T extends typeof ASTNode>(kind: T): TsNodeOf<T> {
        return this as TsNodeOf<typeof kind>;
    }

    find<T extends typeof ASTNode>(query: ASTQuery<T>, kind?: T): InstanceType<T> | undefined;
    find<T extends typeof ASTNode>(query: ASTQuery<T>, kind?: [T] | []): InstanceType<T>[];
    find<T extends typeof ASTNode>(query: ASTQuery<T>, kind?: T | [T] | []): InstanceType<T> | InstanceType<T>[] | undefined {
        let result: InstanceType<T> | InstanceType<T>[] | undefined = undefined;
        const isMulti = Array.isArray(kind) === true;
        const hasQuery = query !== undefined && (typeof query === 'function' || Object.keys(query).length !== 0);
        const Kind = (kind !== undefined && (isMulti ? kind[0] : kind)) || ASTNode;

        const visitNode = (node: ts.Node) => {
            if (!isMulti && result !== undefined) {
                return;
            }
            if (ASTNode.is(node, Kind) || Kind === ASTNode) {
                let isMatch = true;
                if (hasQuery === true) {
                    isMatch = ASTNode.isMatch(node, query);
                }
                if (isMatch === true) {
                    if (isMulti === true) {
                        if (!Array.isArray(result)) {
                            result = [];
                        }
                        result.push(ASTNode.as(node, Kind));
                    }
                    else {
                        result = ASTNode.as(node, Kind);
                    }
                }
            }
            node.forEachChild(visitNode);
        }
        const topLevelMatch = isMulti === true ?
            (hasQuery ?
                this.getChildNodes().filter(child => ASTNode.is(child, Kind) && ASTNode.isMatch(child, query)) :
                this.getChildNodes().filter(child => ASTNode.is(child, Kind))
            ).map((n) => ASTNode.as(n, Kind)) :
            (hasQuery ?
                this.getChildNodes().find(child => ASTNode.is(child, Kind) && ASTNode.isMatch(child, query)) :
                this.getChildNodes().find(child => ASTNode.is(child, Kind))
            );
        // TODO: should this be here?
        if (isMulti === true && (topLevelMatch as T[]).length > 0) {
            return topLevelMatch as InstanceType<T>[];
        }
        if (isMulti === false && topLevelMatch !== undefined) {
            return ASTNode.as(topLevelMatch as ts.Node, Kind);
        }
        this.forEachChild(visitNode);
        if (result === undefined) {
            return isMulti ? [] : undefined;
        }
        return result;
    }

    static is<T extends typeof ASTNode>(node: ts.Node, kind: T): node is TsNodeOf<T> {
        const kindName = kind.name;
        const isFunction = ts[`is${kindName}`];
        if (isFunction === undefined) {
            try {
                const customContentType = ASTNode.as(node, kind);
                if (!!customContentType['is']) {
                    return customContentType['is'](node);
                }
            }
            catch {
                return false;
            }
        }
        return isFunction(node);
        // return ASTNode.from(node).kindString === kind.name;
    }

    static isMatch<T extends typeof ASTNode>(node: TsNodeOf<T>, query: ASTQuery<T>): boolean {
        if (node === undefined) {
            return false;
        }
        function queryIsFunction(query: ASTQuery<T>): query is ((node: ts.Node) => boolean) {
            return typeof query === 'function';
        }
        if (queryIsFunction(query)) {
            return query(node);
        }
        let isMatch = true;
        Object.entries(query).forEach(([key, val]) => {
            if (isMatch === false) return;
            if (node[key] !== val) isMatch = false;
        });
        return isMatch;
    }

    static as<T extends typeof ASTNode>(node: TsNodeOf<T>, kind: T): InstanceType<T> {
        return new kind(node) as InstanceType<T>;
    }

    static from<T extends ts.Node>(node: T) {
        return new ASTNode(node);
    }
}

