import { createSlice } from "@reduxjs/toolkit";
import {produce} from 'immer';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: []
    },
    reducers: {
        setContacts: (state, action) => {
            return produce(state, draftState => {
                draftState.contacts = action.payload;
            });
        },
        addContact: (state, action) => {
            return produce(state, draftState => {
                draftState.contacts.push({...action.payload, id: draftState.contacts.length + 1});
            });
        },
        deleteContact: (state, action) => {
            return produce(state, draftState => {
                draftState.contacts = draftState.contacts.filter(contact => contact.id !== action.payload);
            });
        },
        editContact: (state, action) => {
            return produce(state, draftState => {
                const { name, email, phone, id } = action.payload;
                console.log("Editing contact with ID:", id);
                console.log("Contacts:", draftState.contacts);
                const contactIndex = draftState.contacts.findIndex(contact => Number(contact.id) === Number(id));
                console.log("Found contact index:", contactIndex);
                if (contactIndex !== -1) {
                    draftState.contacts[contactIndex].name = name;
                    draftState.contacts[contactIndex].email = email;
                    draftState.contacts[contactIndex].phone = phone;
                }
            });
        },
    }
});

export default contactSlice.reducer;
export const { setContacts, addContact, deleteContact, editContact } = contactSlice.actions;
