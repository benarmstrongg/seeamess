import React, { ButtonHTMLAttributes, FC } from "react";
import classnames from 'classnames';
import styled from 'styled-components';

export const EditorButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { text?: string, active?: boolean }> = (props) => (
    <Button
        {...props}
        {...{ active: '' }}
        className={classnames({
            [props.className || '']: true,
            active: props.active === true
        })}
    >
        {props.text || props.children}
    </Button>
)

export const Button = styled.button`
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    margin-right: 4px;
    display: flex;
    align-items: center;

    &:hover, &.active {
        background-color: lightgray;
    }
`;