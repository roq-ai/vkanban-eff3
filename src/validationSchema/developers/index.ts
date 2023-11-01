import * as yup from 'yup';

export const developerValidationSchema = yup.object().shape({
  project_role: yup.string().nullable(),
  programming_language: yup.string().nullable(),
  years_of_experience: yup.number().integer().nullable(),
  name: yup.string().nullable(),
  email: yup.string().nullable(),
});
