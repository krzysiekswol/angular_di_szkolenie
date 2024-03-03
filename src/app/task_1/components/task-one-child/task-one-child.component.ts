import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskOneGrandChildComponent } from '../task-one-grandchild/task-one-grandchild.component';

@Component({
  standalone: true,
  selector: 'app-task-one-child',
  template: `
    <p>Child Component</p>
    <app-task-one-grandchild/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TaskOneGrandChildComponent,
  ],
})
export class TaskOneChildComponent {}