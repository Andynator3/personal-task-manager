export type Priority = 'BASSE' | 'MOYENNE' | 'HAUTE';

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt?: string;
}
