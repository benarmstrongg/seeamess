import { Identifier, JSXIdentifier, Program, TSTypeParameter, VariableDeclarator } from "jscodeshift";
import { ASTCollection } from "../../types/jscodeshift";

export class ASTHelper {

    constructor(public filePath: string) { }

    static getProgram(collection: ASTCollection) {
        return collection.find(Program);
    }

    static parseVariableDeclaration = (declaration: VariableDeclarator | Identifier | JSXIdentifier | TSTypeParameter) => {
        // let name, type;
        switch (declaration.type) {
            case 'VariableDeclarator':
                if (declaration.id.type === 'Identifier') {
                    // name = declaration.id.name;
                }
        }
    }
}