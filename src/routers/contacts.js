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

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/register', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

router.put('/:contactId', isValidId, validateBody(createContactSchema), ctrlWrapper(upsertContactController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactByIdController));


export default router;
