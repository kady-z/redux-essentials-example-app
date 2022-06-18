import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post!', content: 'Hello again!' }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload);
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload;
            const existingpost = state.find(post => post.id === id);
            if (existingpost) {
                existingpost.title = title;
                existingpost.content = content;
            }
        }
    }
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;