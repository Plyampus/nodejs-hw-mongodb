import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContactsService = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactByIdService = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

