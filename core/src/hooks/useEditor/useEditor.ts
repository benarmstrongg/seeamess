import { useState } from "react";
import { ContentType } from "../../types/ContentType";
import { useTabs } from "../useTabs";
import { IEditorContext } from "./types";

export function useEditor<T extends ContentType>(contentType?: new (...args: any) => T): IEditorContext<T> {
    const tabs = useTabs();
    const [content] = useState<T>(tabs.openTabs[tabs.activeTab] as T);
    return { content };
}