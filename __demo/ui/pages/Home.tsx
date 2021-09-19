import React, { FC } from 'react';
import { PostProps } from '../components/Post';
import { PostList } from '../components/PostList';

interface HomeProps {
    posts: PostProps[];
}

export const Home: FC<HomeProps> = ({ posts }) => {
    return (
        <div>
            <h2>Home</h2>
            <PostList posts={posts} />
        </div>
    );
}