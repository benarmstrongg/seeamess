import { JsxElement, JsxExpression, JsxFragment, JsxSelfClosingElement, JsxText } from "ast";

export type JsxChild = JsxElement | JsxFragment | JsxText | JsxExpression | JsxSelfClosingElement;