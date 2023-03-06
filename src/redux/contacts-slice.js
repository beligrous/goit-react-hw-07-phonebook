import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: action.payload,
        };
      })
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [...state.items, action.payload],
        };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(item => item.id !== action.payload),
        };
      })
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

// export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
