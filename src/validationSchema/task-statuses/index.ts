import * as yup from 'yup';

export const taskStatusValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  project_task_id: yup.string().nullable().required(),
});
