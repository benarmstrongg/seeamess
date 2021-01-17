import ts from "typescript";
import { ASTNode } from "../ASTNode";

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