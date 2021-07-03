import React, { ButtonHTMLAttributes, FC } from "react";
import classnames from 'classnames';
import './styles.scss';

export const EditorButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { text?: string, active?: boolean }> = (props) => (
    <button
        {...props}
        {...{ active: '' }}
        className={classnames({
            'EditorButton': true,
            [props.className || '']: true,
            active: props.active === true
        }, 4, '')}
    >
        {props.text || props.children}
    </button>
)

