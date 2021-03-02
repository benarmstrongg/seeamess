import React, { ButtonHTMLAttributes, FC } from "react";
import './styles.scss';

export const EditorButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { text?: string, active?: boolean }> = (props) => (
    <button
        {...props}
        {...{ active: '' }}
        className={'EditorButton '.concat(
            props.active === true ? 'active' : '',
            props.className || '')
        }
    >
        {props.text || props.children}
    </button>
)