import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: []
    },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        addContact: (state, action) => {

        },
        deleteContact: (state, action) => {

        },
        editContact: (state, action) => {

        },
    }
});

export default contactSlice.reducer;
export const {setContacts, addContact, deleteContact, editContact} = contactSlice.actions;