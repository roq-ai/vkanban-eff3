import { GetQueryInterface } from 'interfaces';

export interface KanbanBoardInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface KanbanBoardGetQueryInterface extends GetQueryInterface {
  id?: string;
}
