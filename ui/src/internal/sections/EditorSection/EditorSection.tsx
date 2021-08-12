import React, { FC } from "react";
import styled from 'styled-components';
import { useTabs } from "hooks";
import { TabContainer } from "./TabContainer/TabContainer";
import { TabBar } from "./TabBar/TabBar";
import { EditorContainer } from "./EditorContainer/EditorContainer";

export const EditorSection: FC = () => {
    const { openTabs } = useTabs();

    return (
        <Container className="editor-section">
            <TabBar />
            {openTabs.map(({ obj }, index) =>
                <TabContainer tabIndex={index} key={`${obj.containingFilePath}-${obj.kindString}-${obj.pos}`}>
                    <EditorContainer obj={obj} />
                </TabContainer>
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
    overflow-y: hidden;
`;