import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-task-one-grandchild',
  template: `
    <p>GrandChild Component</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskOneGrandChildComponent {}