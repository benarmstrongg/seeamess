import React, { FC } from "react";
import { useTabs } from "hooks";
import styled from 'styled-components';

interface TabContainerProps {
    tabIndex: number;
}

export const TabContainer: FC<TabContainerProps> = ({ children, tabIndex }) => {
    const { activeIndex } = useTabs();
    return (
        <Container hidden={activeIndex !== tabIndex}>
            {children}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;