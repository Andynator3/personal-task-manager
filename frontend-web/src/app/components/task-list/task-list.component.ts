import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = true;
  errorMessage = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les tâches. Vérifiez que l\'API est démarrée.';
        this.loading = false;
      }
    });
  }

  onTaskCreated(task: Task): void {
    this.tasks = [task, ...this.tasks];
  }

  completeTask(task: Task): void {
    this.taskService.completeTask(task.id!).subscribe({
      next: (updated) => {
        const index = this.tasks.findIndex(t => t.id === updated.id);
        if (index !== -1) this.tasks[index] = updated;
      }
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id!).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      }
    });
  }

  get activeTasks(): Task[] {
    return this.tasks.filter(t => !t.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(t => t.completed);
  }

  getDueDateStatus(dueDate?: string): 'overdue' | 'today' | 'upcoming' | null {
    if (!dueDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    if (due < today)  return 'overdue';
    if (due.getTime() === today.getTime()) return 'today';
    return 'upcoming';
  }
}
