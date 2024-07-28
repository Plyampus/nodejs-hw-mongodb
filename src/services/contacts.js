import { SORT_ORDER } from '../constants/index.js';
import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContactsService = async ({ page = 1, perPage = 20, sortOrder = SORT_ORDER.ASC, sortBy = '_id', filter = {}, }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }

  if (filter.isFavorite) {
    contactsQuery.where('isFavorite').equals(filter.isFavorite);
  }

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();
  const paginationData = calculatePaginationData(contactsCount, perPage, page);
  return {
    data: contacts, ...paginationData,
  };
};

export const getContactByIdService = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContactService = async (payload) => {
  const contact = await ContactsCollection.create(payload);
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
