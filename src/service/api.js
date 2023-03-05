import axios from 'axios';

axios.defaults.baseURL = 'https://63fe47a3370fe830d9d1b43b.mockapi.io';

export const fetchAllContacts = async () => {
  const response = await axios.get('/phonebook/contacts');
  return response.data;
};

export const addNewContact = async data => {
  const response = await axios.post('/phonebook/contacts', data);
  return response;
};

export const delContact = async id => {
  const response = await axios.delete(`/phonebook/contacts/${id}`, id);
  return response;
};
