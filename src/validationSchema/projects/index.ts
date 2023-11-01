import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  description: yup.string().required(),
  service_case: yup.number().integer().required(),
  required_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
