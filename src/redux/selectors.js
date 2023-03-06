export const getContacts = store => store.rootReducer.contacts.items;
export const getFilter = store => store.rootReducer.filter;
export const getLoading = store => store.rootReducer.contacts.isLoading;
export const getError = store => store.rootReducer.contacts.error;
