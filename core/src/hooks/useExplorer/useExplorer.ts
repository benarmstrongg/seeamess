import { AST, ASTConstructor } from "../../ast";
import { useContext } from "react";
import { ExplorerContext } from "./ExplorerContext";
import { IExplorer } from "./types";

export function useExplorer(): IExplorer;
export function useExplorer<A extends AST>(contentType: ASTConstructor<A>): A[];
export function useExplorer<A extends AST>(contentType?: ASTConstructor<A>): IExplorer | A[] {
    const explorer = useContext(ExplorerContext);
    if (!!contentType) {
        return (explorer.content.get(contentType) as A[] || []).map(c => c.to(contentType));
    }
    return explorer;
}

