import { ProjectTaskInterface } from 'interfaces/project-task';
import { GetQueryInterface } from 'interfaces';

export interface DeveloperInterface {
  id?: string;
  project_role?: string;
  programming_language?: string;
  years_of_experience?: number;
  name?: string;
  email?: string;
  created_at?: any;
  updated_at?: any;
  project_task?: ProjectTaskInterface[];

  _count?: {
    project_task?: number;
  };
}

export interface DeveloperGetQueryInterface extends GetQueryInterface {
  id?: string;
  project_role?: string;
  programming_language?: string;
  name?: string;
  email?: string;
}
