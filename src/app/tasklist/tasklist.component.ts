import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
})
export class TasklistComponent {
  @Input() taskList!: Todo[];
}
