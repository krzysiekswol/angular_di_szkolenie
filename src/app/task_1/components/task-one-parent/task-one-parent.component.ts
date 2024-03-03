import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskOneChildComponent } from '../task-one-child/task-one-child.component';

@Component({
  selector: 'app-task-one-parent',
  standalone: true,
  imports: [
    TaskOneChildComponent,
  ],
  template: `
    <p>Parent Component</p>
    <app-task-one-child/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskOneParentComponent {

}
