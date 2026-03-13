import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal Task Manager';
  isDarkMode = false;

  constructor(public authService: AuthService, private router: Router) {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', String(this.isDarkMode));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
