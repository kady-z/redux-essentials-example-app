import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Ayush' },
    { id: '1', name: 'Kumar' },
    { id: '2', name: 'Dubey' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;