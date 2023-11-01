import { ProjectTaskInterface } from 'interfaces/project-task';
import { GetQueryInterface } from 'interfaces';

export interface TaskStatusInterface {
  id?: string;
  status?: string;
  project_task_id: string;
  created_at?: any;
  updated_at?: any;

  project_task?: ProjectTaskInterface;
  _count?: {};
}

export interface TaskStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  project_task_id?: string;
}
