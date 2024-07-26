import { Router } from 'express';
import {
    createContactController,
    deleteContactByIdController,
    getAllContactsController,
    getContactByIdController,
    patchContactController,
    upsertContactController
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

router.put('/contacts/:contactId', isValidId, validateBody(createContactSchema), ctrlWrapper(upsertContactController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactByIdController));


export default router;
