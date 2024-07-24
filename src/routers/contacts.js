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

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactByIdController));


export default router;
