import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const onTitleChanged = (event) => setTitle(event.target.value);
    const onContentChanged = (event) => setContent(event.target.value);
    const onAuthorChanged = (event) => setUserId(event.target.value);

    const onSavePostClicked = (event) => {
        event.preventDefault();
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    placeholder="What's on your mind?"
                />

                <label htmlFor="postAuthor">Author</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content</label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button type="submit" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    );

};