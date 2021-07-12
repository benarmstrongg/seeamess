import React, { FC } from 'react';
import styled from 'styled-components';

interface NodeFormHeadingProps {
    text: string;
}

export const NodeFormHeading: FC<NodeFormHeadingProps> = ({ text }) => (
    !!text ? (<Heading>{text}</Heading>) : null
);

export const Heading = styled.h5`
    display: inline-block;
    margin-right: 5px;
`;