import { createSlice } from "@reduxjs/toolkit";

const intitalState = [
    { id: '0', name: 'Ayush' },
    { id: '1', name: 'Kumar' },
    { id: '2', name: 'Dubey' }
];

const usersSlice = createSlice({
    name: 'users',
    intitalState,
    reducers: {}
});

export default usersSlice.reducer;