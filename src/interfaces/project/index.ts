import { ProjectTaskInterface } from 'interfaces/project-task';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  description: string;
  service_case: number;
  company_id: string;
  required_date?: any;
  created_at?: any;
  updated_at?: any;
  project_task?: ProjectTaskInterface[];
  company?: CompanyInterface;
  _count?: {
    project_task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  company_id?: string;
}
