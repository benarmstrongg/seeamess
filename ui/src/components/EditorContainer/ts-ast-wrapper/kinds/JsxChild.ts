import { JsxElement } from "./JsxElement";
import { JsxExpression } from "./JsxExpression";
import { JsxFragment } from "./JsxFragment";
import { JsxSelfClosingElement } from "./JsxSelfClosingElement";
import { JsxText } from "./JsxText";

export type JsxChild = JsxElement | JsxFragment | JsxText | JsxExpression | JsxSelfClosingElement;