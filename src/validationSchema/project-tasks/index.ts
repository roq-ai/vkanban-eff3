import * as yup from 'yup';

export const projectTaskValidationSchema = yup.object().shape({
  description: yup.string().required(),
  required_date: yup.date().nullable(),
  status: yup.string().required(),
  document_file: yup.string().nullable(),
  started: yup.date().required(),
  project_id: yup.string().nullable().required(),
  developer_id: yup.string().nullable().required(),
});
