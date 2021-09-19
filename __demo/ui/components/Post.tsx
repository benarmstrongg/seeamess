import React, { FC } from 'react';

export interface PostProps {
    title: string;
    body: string;
    createdDate: string;
}

export const Post: FC<PostProps> = ({ title, body, createdDate }) => {
    return (
        <div className="post">
            <h3 className="post-title">{title}</h3>
            <p className="post-created-date">{createdDate}</p>
            <p className="post-body">{body}</p>
        </div>
    );
}