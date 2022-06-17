import React, { useState} from 'react';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (event) => setTitle(event.target.value);
    const onContentChanged = (event) => setContent(event.target.value);

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Title</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postContent">Content</label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button type="submit">Save Post</button>
            </form>
        </section>
    );

};