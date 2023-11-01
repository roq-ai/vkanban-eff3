import { TaskStatusInterface } from 'interfaces/task-status';
import { ProjectInterface } from 'interfaces/project';
import { DeveloperInterface } from 'interfaces/developer';
import { GetQueryInterface } from 'interfaces';

export interface ProjectTaskInterface {
  id?: string;
  description: string;
  required_date?: any;
  project_id: string;
  status?: string;
  document_file?: string;
  started: any;
  developer_id: string;
  created_at?: any;
  updated_at?: any;
  task_status?: TaskStatusInterface[];
  project?: ProjectInterface;
  developer?: DeveloperInterface;
  _count?: {
    task_status?: number;
  };
}

export interface ProjectTaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  project_id?: string;
  status?: string;
  document_file?: string;
  developer_id?: string;
}
