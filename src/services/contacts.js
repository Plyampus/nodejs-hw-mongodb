import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContactsService = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactByIdService = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContactService = async (prodactData) => {
  const contact = await ContactsCollection.create(prodactData);
  return contact;
};

export const updateContactByIdService = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate({ _id: contactId }, payload, { new: true, includeResultMetadata: true, ...options, },);

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContactByIdService = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};
