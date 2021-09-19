import React, { FC, useState } from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { EditorButton } from "@seeamess/core";
import { ReactFunctionComponent } from "../../../content-types/FC";
import styled from 'styled-components';
import { UIView } from "./UIView";

interface EditorAreaProps {
    component: ReactFunctionComponent;
}

//  theme={{ "plain": { "color": "#e7d2ed", "backgroundColor": '#322a38' }, "styles": [{ "types": ["prolog", "comment", "doctype", "cdata"], "style": { "color": "hsl(30, 20%, 50%)" } }, { "types": ["property", "tag", "boolean", "number", "constant", "symbol"], "style": { "color": "#f677e1" } }, { "types": ["attr-name", "string", "char", "builtin", "insterted"], "style": { "color": "hsl(75, 70%, 70%)" } }, { "types": ["operator", "entity", "url", "string", "variable", "language-css"], "style": { "color": "hsl(40, 90%, 70%)" } }, { "types": ["deleted"], "style": { "color": "rgb(255, 85, 85)" } }, { "types": ["italic"], "style": { "fontStyle": "italic" } }, { "types": ["important", "bold"], "style": { "fontWeight": "bold" } }, { "types": ["regex", "important"], "style": { "color": "#e90" } }, { "types": ["atrule", "attr-value", "keyword"], "style": { "color": "#f677e1" } }, { "types": ["punctuation", "symbol"], "style": { "opacity": 0.7 } }] }}

export const EditorArea: FC<EditorAreaProps> = ({ component }) => {
    const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
    return (
        <Container>
            <div className="EditorToolbar">
                <EditorButton
                    text="Edit"
                    active={viewMode === 'edit'}
                    onClick={() => setViewMode('edit')}
                />
                <EditorButton
                    text="Preview"
                    active={viewMode === 'preview'}
                    onClick={() => setViewMode('preview')}
                />
            </div>
            {viewMode === 'preview' ? (
                <LiveProvider
                    code={component.returnStatement?.getText()?.replace('return', '')}
                    lang="tsx"
                    onErrorCapture={(e) => console.log(1)}
                //  scope={component.props?.array.reduce((o, p) => ({ ...o, [p.getName()]: p.getDefaultValue() }), {})}
                >
                    <LivePreview />
                    <LiveError onErrorCapture={(e) => console.log(1)} />
                </LiveProvider>
            ) : (
                <UIView />
            )}
        </Container>
    );
}

const Container = styled.div`
    padding: 5px;
`;