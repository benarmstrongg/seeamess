import React, { FC } from "react";
import { ContentContext } from "./ContentContext";
import { ContentPoviderProps } from "./types";

export const ContentProvider: FC<ContentPoviderProps> = ({ children, content, update }) => (
    <ContentContext.Provider value={{
        content, update
    }}>
        {children}
    </ContentContext.Provider>
);