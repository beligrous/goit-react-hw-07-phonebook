import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addContact, deleteContact, fetchContacts } from '../redux/operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, action) => [...state, action.payload],
//       prepare: data => {
//         return { payload: { ...data, id: nanoid() } };
//       },
//     },
//     delContact: (state, action) =>
//       state.filter(item => item.id !== action.payload),
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    },
    [addContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },

    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

// export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
