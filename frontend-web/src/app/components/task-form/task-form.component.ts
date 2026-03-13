import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

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
  loading = false;
  errorMessage = '';

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (!this.title.trim()) return;

    this.loading = true;
    this.errorMessage = '';

    this.taskService.createTask({
      title: this.title.trim(),
      description: this.description.trim(),
      completed: false
    }).subscribe({
      next: (task) => {
        this.taskCreated.emit(task);
        this.title = '';
        this.description = '';
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la création de la tâche.';
        this.loading = false;
      }
    });
  }
}
