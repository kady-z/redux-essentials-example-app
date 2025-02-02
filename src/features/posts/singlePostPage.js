import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';
import { ReactionButtons } from './reactionButtons';

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector( state => state.posts.find(post => post.id === postId));

    if(!post) {
        return (
            <section>
                <h2>Post not Found!</h2>
            </section>
        );
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostAuthor userId={post.user} />
                <TimeAgo timeStamp={post.date} />
                <ReactionButtons post={post} />
                <Link to={`/editpost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    );
};