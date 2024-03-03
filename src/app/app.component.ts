import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskOneParentComponent } from './task_1/components/task-one-parent/task-one-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskOneParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'di';
}
