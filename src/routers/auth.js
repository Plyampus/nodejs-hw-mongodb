import { Router } from "express";
import { loginUserSchema, registerUserSchema } from "../validation/auth";
import { validateBody } from "../middlewares/validateBody";
import { loginUserController, logoutUserController, refreshUserSessionController, registerUserController } from "../controllers/auth";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const router = Router();

router.post(
    '/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController),
);

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default router;
