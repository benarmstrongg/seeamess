import React, { FC } from "react";
import Container from './styles';

export const Spinner: FC = () => (
    <Container>
        <div className="cube1"></div>
        <div className="cube2"></div>
        <div className="overlay"></div>
    </Container>
)