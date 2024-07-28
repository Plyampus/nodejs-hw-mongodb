import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch ({ details }) {
    next(createHttpError(400, 'Bad Request', { errors: details }));
  }
};
