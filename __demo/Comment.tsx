import React from 'react';

interface CommentProps {
    author: {
        avatarUrl: string;
        name: string;
    };
    text: string;
    date: string;
}

export function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}