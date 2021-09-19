import React, { FC, useState } from "react";
import { Post, PostProps } from "./Post";

interface PostListProps {
    posts: PostProps[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
    const [displayCount, setDisplayCount] = useState(5);

    return (
        <div className="list">
            {posts.slice(0, displayCount).map(post => (<Post {...post} />))}
            <p className="list-paging">{`${displayCount} of ${posts.length}`}</p>
            {!!(displayCount >= posts.length) && (
                <button
                    className="list-show-more"
                    onClick={() => setDisplayCount(displayCount + 5)}
                >Show More</button>
            )}
        </div>
    );
}