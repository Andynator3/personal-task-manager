import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';
import type { Priority } from '../../task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  title = '';
  description = '';
  priority: Priority = 'MOYENNE';
  dueDate = '';
  loading = false;
  errorMessage = '';

  readonly priorities: { value: Priority; label: string }[] = [
    { value: 'BASSE',   label: 'Basse' },
    { value: 'MOYENNE', label: 'Moyenne' },
    { value: 'HAUTE',   label: 'Haute' }
  ];

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (!this.title.trim()) return;

    this.loading = true;
    this.errorMessage = '';

    this.taskService.createTask({
      title: this.title.trim(),
      description: this.description.trim(),
      completed: false,
      priority: this.priority,
      dueDate: this.dueDate || undefined
    }).subscribe({
      next: (task: Task) => {
        this.taskCreated.emit(task);
        this.title = '';
        this.description = '';
        this.priority = 'MOYENNE';
        this.dueDate = '';
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la création de la tâche.';
        this.loading = false;
      }
    });
  }
}
